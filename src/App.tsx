import UserComponent from "./UserComponent";
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  PointerSensor,
  useSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "ryan",
    },
    {
      id: 2,
      name: "lucy",
    },
    {
      id: 3,
      name: "lily",
    },
    {
      id: 4,
      name: "joe",
    },
    {
      id: 5,
      name: "jane",
    },
    {
      id: 6,
      name: "jim",
    },
    {
      id: 7,
      name: "jim",
    },
  ]);

  const handleDrag = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      setUsers((items) => {
        const oldIndex = users.findIndex((user) => user.id === active.id);
        const newIndex = users.findIndex((user) => user.id === over?.id);

        return arrayMove(users, oldIndex, newIndex);
      });
    }
  };

  const sensors = [useSensor(PointerSensor)];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDrag}
      >
        <SortableContext
          items={users.map((user) => user.id)}
          strategy={verticalListSortingStrategy}
        >
          {users.map((user) => (
            <UserComponent key={user.id} name={user.name} id={user.id} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
}

export default App;
