interface CourseHeaderProps {
  title: string;
  showStar?: boolean;
}

const CourseHeader = ({ title, showStar = false }: CourseHeaderProps) => {
  return (
    <div className="text-center mb-12">
      {showStar && (
        <span className="rest-ornament block mb-4">✦</span>
      )}
      <div className="rest-divider mb-8">
        <span className="rest-divider-ornament">◇</span>
      </div>
      <h2 className="rest-title mb-4">{title}</h2>
      <div className="rest-line" />
    </div>
  );
};

export default CourseHeader;
