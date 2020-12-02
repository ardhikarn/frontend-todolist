import React from 'react'

import Logo from 'assets/svg/logo'

const TaskList: React.FC = () => {
  return (
    <section className="flex flex-col overflow-x-hidden overflow-y-auto h-taskList rounded">
      <div className="bg-white text-darkPurple rounded p-4">
        ini sebuah todo
      </div>
    </section>
  )
}

export default TaskList