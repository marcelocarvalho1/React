
const Card = ({ title, category, content, image }) => {
    return (
      <div>
        {image && <img src={image} />} 

        <h2>{title}</h2>
        <h6>{category}</h6>
        <p>{content}</p>
      </div>
    );
  };
  export default Card;