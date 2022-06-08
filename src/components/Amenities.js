import parse from 'html-react-parser';
import PropTypes from 'prop-types';

const Amenities = (props) => {
  const { amenities } = props;
  let result = '';

  return (
    <table className="table amenities-table">
      <tbody>
        {amenities && Object.keys(amenities).map((amenity, index, array) => {
          if (index === 0 || index % 3 === 0) {
            result += '<tr>';
          }
          if (amenities[amenity]) {
            const prettyWord = amenity.split('_').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            result += `<td>${prettyWord}</td>`;
          }
          if (index % 3 === 2 && index !== 0) {
            result += '<tr />';
          }
          if (index === array.length - 1) {
            result += '<tr />';
            return parse(result);
          }
          return '';
        })}
      </tbody>
    </table>
  );
};

Amenities.defaultProps = {
  amenities: {},
};

Amenities.propTypes = {
  amenities: PropTypes.oneOfType([PropTypes.object]),
};

export default Amenities;
