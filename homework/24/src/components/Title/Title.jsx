import './styles.scss';

export default function Title(props) {
  const { text } = props;

  return (
    <h1 className="Title text-3xl font-bold underline">
      {text ? text : 'Hello world! I am default title' }
    </h1>
  )
}
