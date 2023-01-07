import {useFn} from "libs/frontend-libs/hooks/src/lib/useFn";

interface IButtonProps {
    name: string;
}


function UpdateButton({name}: IButtonProps) {
  const fn = useFn();
  return (
    <button onClick={fn}>
        {name}
    </button>
  )
}

export default UpdateButton