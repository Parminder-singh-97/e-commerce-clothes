import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = ({ breadcrumbItems }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex space-x-4 text-sm text-gray-700">
        {breadcrumbItems.map((item, index) => (
          <li key={index} className="flex items-center">
            {index < breadcrumbItems.length - 1 ? (
              <Link to={item.path} className="hover:text-blue-600">
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold">{item.label}</span>
            )}
            {index < breadcrumbItems.length - 1 && (
              <span className="mx-2">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
