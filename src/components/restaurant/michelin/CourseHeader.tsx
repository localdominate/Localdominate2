interface CourseHeaderProps {
  title: string;
  showStar?: boolean;
  dividerType?: 'hairline' | 'dots' | 'text' | 'diamond' | 'none';
  dividerText?: string;
}

const CourseHeader = ({ 
  title, 
  showStar = false, 
  dividerType = 'hairline',
  dividerText 
}: CourseHeaderProps) => {
  return (
    <div className="text-center mb-12">
      {showStar && (
        <span className="rest-ornament block mb-6">✦</span>
      )}
      
      {/* Divider before title */}
      {dividerType === 'hairline' && (
        <div className="rest-hairline mb-8" />
      )}
      
      {dividerType === 'dots' && (
        <div className="rest-dots-minimal mb-6">
          <span>·</span>
        </div>
      )}
      
      {dividerType === 'text' && dividerText && (
        <div className="rest-text-divider mb-6">
          <span>{dividerText}</span>
        </div>
      )}
      
      {dividerType === 'diamond' && (
        <div className="rest-diamond mb-8">
          <span>◇</span>
        </div>
      )}
      
      {/* Title */}
      <h2 className="rest-course-title mb-4">{title}</h2>
      
      {/* Line after title */}
      <div className="rest-hairline mt-6" />
    </div>
  );
};

export default CourseHeader;