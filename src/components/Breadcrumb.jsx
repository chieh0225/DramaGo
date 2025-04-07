import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Breadcrumb = ({ pageLink }) => {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          {pageLink?.map((page, index) => (
            <li key={page.name} className={`breadcrumb-item ${pageLink.length === index + 1 ? 'active' : ''}`}>
              {pageLink.length === index + 1 ? page.name : <Link to={page.link}>{page.name}</Link>}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

Breadcrumb.propTypes = {
  pageLink: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
  ),
};

export default Breadcrumb;
