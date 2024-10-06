import React, { useEffect, useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { ArrowDownCircleIcon } from '@heroicons/react/20/solid';

const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSRrAdg_K7U2XfuMFgVX2n8rpaYercjjPrnFik3SFuOUgaYpu0EH5_tZVMrPy08-OKyu0TgVolhQQ2X/pub?gid=305371565&single=true&output=csv';

const DataDisplay = () => {
    const [data, setData] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState('All_Teams');
    const [teams, setTeams] = useState([]);

    const parseCSV = (textData) => {
        const rows = textData.split('\n').slice(1); // Skip the header row
        const parsedData = rows.map(row => {
            const [dateTime, teamName, teamId, amountBefore, amountAfter, description, imageLink] = row.split(',');
            return {
                dateTime,
                teamName,
                teamId,
                amountBefore: parseFloat(amountBefore),
                amountAfter: parseFloat(amountAfter),
                imageLink,
                description,
            };
        });
        setData(parsedData);
        // Extract unique team names
        const uniqueTeams = Array.from(new Set(parsedData.map(item => item.teamName)));
        setTeams(uniqueTeams);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const textData = await response.text();
                parseCSV(textData);
            } catch (error) {
                console.error('Error fetching the data:', error);
            }
        };

        fetchData();
        const interval = setInterval(fetchData, 5000); // Update every 5 seconds
        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    // Filtered data based on the selected team
    const getFilteredData = () => {
        if (selectedTeam === 'All_Teams') {
            // Create a map to store the latest transaction for each team
            const latestTransactions = new Map();
            data.forEach(item => {
                const existingItem = latestTransactions.get(item.teamName);
                if (!existingItem || new Date(item.dateTime) > new Date(existingItem.dateTime)) {
                    latestTransactions.set(item.teamName, item);
                }
            });

            // Convert map back to array and sort by amountAfter in descending order
            return Array.from(latestTransactions.values()).sort((a, b) => b.amountAfter - a.amountAfter);
        } else {
            // Filter data for the selected team and sort by dateTime in descending order
            return data
                .filter(item => item.teamName === selectedTeam)
                .sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime));
        }
    };

    const filteredData = getFilteredData();

    return (
        <div className="data-display py-8 flex flex-col gap-4 justify-center items-center w-full">
            <div className='flex flex-row'>
                <h1 className='text-red-950 font-serif font-bold text-lg'>Live ScoreBoard</h1>
                <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
            </div>

            

            {/* Dropdown for team selection */}
            <Menu as="div" className="relative inline-block text-left mb-4">
                <div>
                    <MenuButton className="flex flex-row justify-center gap-x-1.5 rounded-lg bg-sky-200 w-60 px-3 py-2 text-sm font-semibold text-gray-800 shadow-lg ring-2 ring-inset ring-sky-400 hover:bg-sky-300">
                        {selectedTeam} <ChevronDownIcon className="-mr-1 h-5 w-5 text-sky-400" />
                    </MenuButton>
                </div>
                <MenuItems className="absolute right-0 z-10 mt-2 w-60 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <MenuItem>
                            <button
                                onClick={() => setSelectedTeam('All_Teams')}
                                className=" block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-orange-200"
                            >
                                All_Teams
                            </button>
                        </MenuItem>
                        {teams.map((team, index) => (
                            <MenuItem key={index}>
                                <button
                                    onClick={() => setSelectedTeam(team)}
                                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-orange-100"
                                >
                                    {team}
                                </button>
                            </MenuItem>
                        ))}
                    </div>
                </MenuItems>
            </Menu>

            {/* {selectedTeam === 'All_Teams' && <p className='font-thin'>Latest transactions</p>} */}

            {filteredData.length > 0 ? (
                <div className='w-full overflow-y-scroll overflow-x-scroll shadow-2xl rounded-lg max-h-[75%]'>
                    <table className="table-auto w-full border-collapse border border-gray-200 bg-slate-100 text-left rounded-lg text-xs md:text-sm shadow-2xl">
                        <thead>
                            <tr className='bg-gray-300'>
                                <th className='p-4'>Date & Time</th>
                                <th className='p-4'>Team Name</th>
                                <th className='p-4'>Amount Before</th>
                                <th className='p-4'>Amount After</th>
                                <th className='p-4'>Description</th>
                                <th className='p-4 w-28'>Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((item, index) => (
                                <tr key={index} className='hover:bg-orange-200 h-16'>
                                    <td className='px-4'>{item.dateTime}</td>
                                    <td className='px-4'>{item.teamName}</td>
                                    <td className='px-4'>{item.amountBefore}</td>
                                    <td className='px-4'>{item.amountAfter}</td>
                                    <td className='px-4'>{item.description}</td>
                                    <td className='px-4 justify-start'>
                                        <a href={item.imageLink} target="_blank" rel="noopener noreferrer" className='group'>
                                            <div className='flex flex-row'>
                                                <ArrowDownCircleIcon className="ml-2 h-5 w-5 text-sky-400 group-hover:text-blue-700" aria-hidden="true" />
                                                <img src={item.imageLink} alt="link" className="text-blue-700 group-hover:text-black" />
                                            </div>
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>No transactions available for this team.</p>
            )}
        </div>
    );
};

export default DataDisplay;
