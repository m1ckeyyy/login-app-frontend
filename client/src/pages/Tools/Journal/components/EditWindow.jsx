import styles from './../Journal.module.scss';
import { AiFillDelete } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';
import { MdColorLens } from 'react-icons/md';
import { BsPinAngleFill, BsPinAngle } from 'react-icons/bs';
export const EditWindow = () => {
  return (
    <div className={styles.editWindow}>
      <button type="button" title="Pin">
        <BsPinAngle size="29" />
      </button>
      <button type="button" title="Delete">
        <AiFillDelete size="30" />
      </button>
      <button type="button" title="Edit content">
        <BiEditAlt size="30" />
      </button>
      <button type="button" title="Change color">
        <MdColorLens size="33" />
      </button>
    </div>
  );
};
