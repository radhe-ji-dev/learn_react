function profileCard(props) {
  return (
    <div className="profile-card">
      <img src={props.avatar} alt={`${props.name}'s avatar`} />
      <h2>{props.name}</h2>
      <p>{props.bio}</p>
    </div>
  );
}
export default profileCard;

// The component name should start with a capital letter
