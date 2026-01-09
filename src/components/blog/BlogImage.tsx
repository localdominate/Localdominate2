interface BlogImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  title?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

const BlogImage = ({ 
  src, 
  alt, 
  caption, 
  className = "",
  title,
  width = 1200,
  height = 630,
  priority = false
}: BlogImageProps) => {
  return (
    <figure className={`my-8 ${className}`}>
      <img 
        src={src} 
        alt={alt}
        title={title || alt}
        width={width}
        height={height}
        className="w-full rounded-xl shadow-lg"
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        style={{ aspectRatio: `${width}/${height}` }}
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
