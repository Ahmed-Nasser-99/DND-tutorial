import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface Props {
  id: number;
  name: string;
}

const UserComponent = (props: Props) => {
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: props.id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    width: "20%",
    border: isDragging ? "1px solid red" : "1px solid black",
    margin: "5px",
    padding: "5px",
    fontSize: "20px",
    opacity: isDragging ? " 0.5" : "1",
    color: isDragging ? "red" : "black",
    cursor: isDragging ? "all-scroll" : "grab",
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        textAlign: "center",
        ...style,
      }}
      onMouseOver={() => {}}
    >
      {props.name}
    </div>
  );
};

export default UserComponent;
