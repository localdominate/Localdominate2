import { ReactNode } from 'react';

interface MenuCourseProps {
  title: string;
  name: string;
  description: string;
  price?: string;
  isMain?: boolean;
  isOffered?: boolean;
  children?: ReactNode;
}

const MenuCourse = ({ 
  title, 
  name, 
  description, 
  price, 
  isMain = false, 
  isOffered = false,
  children 
}: MenuCourseProps) => {
  return (
    <div className={`rest-course ${isMain ? 'rest-course-main' : ''} rest-fade-in`}>
      <p className="rest-course-title">{title}</p>
      <h3 className="rest-course-name">{name}</h3>
      <p className="rest-course-description">{description}</p>
      
      {children}
      
      {price && (
        <p className="rest-course-price">
          {isOffered ? (
            <span className="rest-bonus-tag">Offert</span>
          ) : (
            price
          )}
        </p>
      )}
      
      {isMain && (
        <div className="rest-chef-tag">
          Empfehlung des Küchenchefs
        </div>
      )}
    </div>
  );
};

export default MenuCourse;
