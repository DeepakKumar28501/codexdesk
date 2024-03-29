import InputField from "../Components/InputField"

const JobPostingData = ({handleChange}) => {
    const now=new Date();
    console.log(now)
    const twentyFourHoursAgo=new Date(now-24*60*60*1000)//hour*minute*second*milisecond
    const sevenDaysAgo=new Date(now-7*24*60*60*1000)//days*hour*minute*second*milisecond
    const thirtyDaysAgo=new Date(now-30*24*60*60*1000)//days*hour*minute*second*milisecond
    // console.log(thirtyDaysAgo);

    // convert date to string 
    const twentyFourHoursAgoDate=twentyFourHoursAgo.toISOString().slice(0,10);
    const sevenDaysAgoDate=sevenDaysAgo.toISOString().slice(0,10);
    const thirtyDaysAgoDate=thirtyDaysAgo.toISOString().slice(0,10);
    // iso method convert date to string 
    // console.log(thirtyDaysAgoDate);

  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Date of Posting</h4>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All Time
        </label>
        <InputField
          handleChange={handleChange}
          value={twentyFourHoursAgoDate}
          title="Last 24 Hours"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={sevenDaysAgoDate}
          title="Last 7 Days"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={thirtyDaysAgoDate}
          title="Last 30 Days"
          name="test"
        />
        
      </div>
    </div>
  )
}

export default JobPostingData
