import ReactDropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import styled from 'styled-components';
import DropdownArrowImage from '../resources/image/dropdown-arrow.svg';

const StyledReactDropdown = styled(ReactDropdown)`
  & {
    min-width: 270px;
    .Dropdown-control {
      border: 1px solid #034ea2;
    }
    .Dropdown-menu {
      max-height: none;
    }
  }
  &.is-open {
    .Dropdown-control {
      border: 1px solid #034ea2;
      border-bottom: 1px solid transparent;
    }
    .Dropdown-menu {
      border: 1px solid #034ea2;
      border-top: 1px solid transparent;
    }
  }
  .arrow {
    display: flex;
    margin-top: -ceil(2.5);
    position: absolute;
    right: 10px;
    top: 14px;
    width: 14px;
    /* transition: transform 0.25s; */
  }

  .arrow-close {
    transform: rotate(-180deg);
  }
  .arrow-open {
    transform: rotate(0deg);
  }
`;

const Select = (props) => {
  return (
    <StyledReactDropdown
      {...props}
      arrowClosed={
        <span className='arrow arrow-close'>
          <img src={DropdownArrowImage} alt='arrow' />
        </span>
      }
      arrowOpen={
        <span className='arrow arrow-open'>
          <img src={DropdownArrowImage} alt='arrow' />
        </span>
      }
    />
  );
};

export default Select;
