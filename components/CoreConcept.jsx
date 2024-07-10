export default function CoreConcept({ image, title, description }) {
    //using objec tdestructuring ^ allows us to ignore using props.title
    return (
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }