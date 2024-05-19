const ProfileDetail = ({text,value}) => {
    return (
      <div className="w-1/2 flex flex-col">
        <p className="text-richblack-400"> {text}</p>
        <p className="text-gray-400 pl-2">{value}</p>
      </div>
    );
  };
  export default ProfileDetail;
  