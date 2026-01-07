import { Twitter, Linkedin, Facebook, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SocialShareProps {
  url: string;
  title: string;
  description?: string;
}

const SocialShare = ({ url, title, description }: SocialShareProps) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description || "");

  const shareLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: "hover:text-[#1DA1F2]",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`,
      color: "hover:text-[#0A66C2]",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "hover:text-[#1877F2]",
    },
    {
      name: "WhatsApp",
      icon: Share2,
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      color: "hover:text-[#25D366]",
    },
  ];

  const handleShare = (href: string) => {
    window.open(href, "_blank", "width=600,height=400");
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground mr-2">Teilen:</span>
      {shareLinks.map((link) => (
        <Button
          key={link.name}
          variant="ghost"
          size="icon"
          className={`h-9 w-9 ${link.color} transition-colors`}
          onClick={() => handleShare(link.href)}
          aria-label={`Auf ${link.name} teilen`}
        >
          <link.icon className="h-4 w-4" />
        </Button>
      ))}
    </div>
  );
};

export default SocialShare;
