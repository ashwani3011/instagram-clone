import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'

export default function Modal() {
  const [open, setOpen] = useRecoilState(modalState)
  return <div>{open && <p> Modal open</p>}</div>
}
