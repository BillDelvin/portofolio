import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';

const PortofolioForm = ({ onSubmit, initalUpdateData }) => {
 const [startDate, setStartDate] = useState(null);
 const [endDate, setEndDate] = useState(null);
 const {
  register,
  handleSubmit,
  formState: { errors },
  setValue,
 } = useForm({
  defaultValues: initalUpdateData,
 });

 useEffect(() => {
  if (initalUpdateData) {
   const { startDate, endDate } = initalUpdateData;
   if (startDate) setStartDate(new Date(startDate));
   if (endDate) setEndDate(new Date(endDate));
  }
 }, [initalUpdateData]);

 const handleChangeDate = (dateInputName, setDate) => (date) => {
  setValue(dateInputName, date);
  setDate(date);
 };

 return (
  <form onSubmit={handleSubmit(onSubmit)}>
   <div className="form-group">
    <label htmlFor="title">Title</label>
    <input {...register('title')} name="title" type="text" className="form-control" id="title" />
   </div>

   <div className="form-group">
    <label htmlFor="city">Company</label>
    <input
     {...register('company')}
     name="company"
     type="text"
     className="form-control"
     id="company"
    />
   </div>

   <div className="form-group">
    <label htmlFor="city">Company Website</label>
    <input
     {...register('companyWebsite')}
     name="companyWebsite"
     type="text"
     className="form-control"
     id="companyWebsite"
    />
   </div>

   <div className="form-group">
    <label htmlFor="street">Location</label>
    <input
     {...register('location')}
     name="location"
     type="text"
     className="form-control"
     id="location"
    />
   </div>

   <div className="form-group">
    <label htmlFor="street">Job Title</label>
    <input
     {...register('jobTitle')}
     name="jobTitle"
     type="text"
     className="form-control"
     id="jobTitle"
    />
   </div>

   <div className="form-group">
    <label htmlFor="description">Description</label>
    <textarea
     {...register('description')}
     name="description"
     rows="5"
     type="text"
     className="form-control"
     id="description"
    ></textarea>
   </div>

   <div className="form-group">
    <label htmlFor="startDate">Start Date</label>
    <div>
     <DatePicker
      {...register('startDate')}
      showYearDropdown
      selected={startDate}
      onChange={handleChangeDate('startDate', setStartDate)}
     />
    </div>
   </div>

   <div className="form-group">
    <label htmlFor="endDate">End Date</label>
    <div>
     <DatePicker
      {...register('endDate')}
      disabled={!endDate}
      showYearDropdown
      selected={endDate}
      onChange={handleChangeDate('endDate', setEndDate)}
     />
    </div>
   </div>
   <div className="form-group">
    {endDate && (
     <button
      type="button"
      className="btn btn-danger"
      onClick={() => handleChangeDate('endDate', setEndDate)(null)}
     >
      No End Date
     </button>
    )}
    {!endDate && (
     <button
      type="button"
      className="btn btn-success"
      onClick={() =>
       handleChangeDate('endDate', setEndDate)(new Date(new Date().setHours(0, 0, 0, 0)))
      }
     >
      Set End Date
     </button>
    )}
   </div>
   <button type="submit" className="btn btn-primary">
    {initalUpdateData ? 'Updated' : 'Created'}
   </button>
  </form>
 );
};

export default PortofolioForm;
