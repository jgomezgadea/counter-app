import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  atom,
  selector,
} from 'recoil'

function App() {
  return (
    <RecoilRoot>
      <TextInput />
      <Counter />
    </RecoilRoot>
  );
}

const textInputState = atom({
  key: 'textInputState',
  default: '',
})

const textInputSelector = selector({
  key: 'textInputSelector',
  get: ({ get }) => {
    const text = get(textInputState)

    return text.length
  }
})

function TextInput() {
  const [text, setText] = useRecoilState(textInputState)

  const onInputChange = (input) => {
    setText(input.target.value)
  }

  return(
    <div>
      <input value={text} onChange={onInputChange}/>
    </div>
  )
}

function Counter() {
  const length = useRecoilValue(textInputSelector)
  return (
    <span>{length}</span>
  )
}

export default App;
