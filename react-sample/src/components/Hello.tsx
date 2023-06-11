const Hello = () => {
  const onCLick = () => {
    alert('hello');
  }
  const text = 'Hello, React';

  return (
    <div onClick={onCLick}>
      {text}
    </div>
  )
}

export default Hello