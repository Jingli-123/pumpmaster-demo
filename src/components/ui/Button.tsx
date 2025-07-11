interface Props {
  image?: string;
  altText?: string;
  imageClass?: string;
  buttonClass?: string;
  disabled?: boolean;
  text?: string | number;
  onClick: () => void | Promise<void>;
}
const Button = ({ image, altText, imageClass, buttonClass, disabled, text, onClick }: Props) => {
    const handleClick = () => {
        void onClick();
    }
  return (
    <button className={buttonClass} onClick={handleClick} disabled={disabled}>
      <img src={image} alt={altText} className={imageClass} />
      {text}
    </button>
  );
};
export default Button;
