import {useRef} from "react";
import ButtonComponent from "../Utils/Button.component";
import styles from '../../styles/Base.module.scss';

const EventSearchComponent = ({submitFilter}) => {

  const yearInputRef = useRef();
  const monthInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const yearValueSelect = yearInputRef.current.value;
    const montValueSelect = monthInputRef.current.value;

    submitFilter({year: yearValueSelect, month: montValueSelect});

  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="form-year">Year</label>
          <select name="form-year" id="form-year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor="form-month">Month</label>
          <select name="form-month" id="form-month" ref={monthInputRef}>
            <option value="1">Jan</option>
            <option value="2">Feb</option>
            <option value="3">Mar</option>
            <option value="4">Apr</option>
            <option value="5">May</option>
            <option value="6">Jun</option>
            <option value="7">Jul</option>
            <option value="8">Aug</option>
            <option value="9">Sep</option>
            <option value="10">Oct</option>
            <option value="11">Nov</option>
            <option value="12">Dec</option>
          </select>
        </div>
      </div>
      <ButtonComponent >Submit</ButtonComponent>
    </form>
  );
};

export default EventSearchComponent;