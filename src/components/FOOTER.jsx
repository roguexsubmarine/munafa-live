import { SocialIcon } from 'react-social-icons';

export default function FOOTER() {
    return (
        <div className="flex flex-row justify-center gap-8 h-8 md:h-16 w-full mb-4">
            <SocialIcon network="youtube" url="https://www.youtube.com/c/BhausInnovationEntrepreneurshipCellCOEP2022" />
            <SocialIcon network="instagram" url="https://www.instagram.com/biec_coep/" />
            <SocialIcon network="linkedin" url="https://www.linkedin.com/company/pune-startup-fest/posts/?feedView=all" />
            <SocialIcon network="facebook" url="https://www.facebook.com/biec.coep/" />
        </div>
    );
}
