import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { IoArrowBack } from 'react-icons/io5';

import { Button } from '../components/Button';
import { Info } from '../components/Info';
import { selectDetails } from '../store/details/details-selectors';
import { clearDetails, loadCounrtyByName } from '../store/details/details-actions';


export const Details = () => {
  const { name } = useParams();
  // const name = namePar.name;
  const dispatch = useDispatch();
  const { currentCountry, error, status } = useSelector(selectDetails);
  // console.log(name);
  // console.log(currentCountry);
  
  useEffect(() => {
      dispatch(loadCounrtyByName(name));

      return () => {
          dispatch(clearDetails());
      }
  }, [name, dispatch]);

  const navigate = useNavigate();

  return (
      <div>
          <Button onClick={() => navigate(-1)}>
              <IoArrowBack /> Back
          </Button>
          {status === 'loading' && <h2>Loading...</h2>}
          {error && <h2>{error}</h2>}
          {/* {console.log(currentCountry)} */}
          {currentCountry && <Info push={navigate} {...currentCountry} />}
      </div>
  );
};
