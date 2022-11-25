const Button = ({ onclick, children, leftIcon, rightIcon }) => (
    <button className="banner_butto" = onclick={onclick}>
        {leftIcon} {children} {rightIcon}
    </button>

);
export default Button;