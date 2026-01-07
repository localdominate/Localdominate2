interface BlogImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

const BlogImage = ({ src, alt, caption, className = "" }: BlogImageProps) => {
  return (
    <figure className={`my-8 ${className}`}>
      <img 
        src={src} 
        alt={alt}
        className="w-full rounded-xl shadow-lg"
        loading="lazy"
      />
      {caption && (
        <figcaption className="text-center text-sm text-muted-foreground mt-3 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default BlogImage;
