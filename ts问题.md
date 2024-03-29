##### * 如何解决 'className does not exist on type 'IntrinsicAttributes & Props' 错误？ 

要解决 ‘className does not exist on type ‘IntrinsicAttributes & Props’ 错误，我们需要明确指定组件的属性类型，并确保我们正确地使用了相应的属性。

```
interface ButtonProps {
    className: string;
    onClick: () => void; 
}

const Button: React.FC<ButtonProps> = ({ className, onClick }) => {
  return <button className={className} onClick={onClick}>Click me</button>;
};
```
