import React from "react";

export enum SURVEY_STATUS {
  ACTIVE = 0,
  PAUSED = 1,
}

const mockData: SurveryRecordProps[] = [
  {
    id: 150,
    title: "Crypto App UX/UI Quiz",
    status: SURVEY_STATUS.ACTIVE,
    type: "Quantitative",
    date: new Date(),
    completed: "120/500",
    published: false
  },
  {
    id: 124,
    title: "Game Quest Campaign",
    status: SURVEY_STATUS.ACTIVE,
    type: null,
    date: new Date(),
    completed: "1/5",
    published: false
  },
  {
    id: 100,
    title: "UX/UI Curve Quiz",
    status: SURVEY_STATUS.PAUSED,
    type: "Quantitative",
    date: new Date(),
    completed: "12/200",
    published: true
  },
]

export interface SurveryRecordProps {
  id: number;
  title: string;
  status: number;
  type: null | string;
  date: Date;
  completed: string;
  published: boolean;
}

const SurveryRecord = (props: SurveryRecordProps) => {
  const { id, title, status, type, date, completed, published } = props;

  return (
    <div className="w-full py-2">
      <div className="flex flex-col w-full bg-zinc-800 rounded-xl">
        <div className="flex justify-between w-full p-4">
          <div>
            {
              status === SURVEY_STATUS.ACTIVE ? (
                <div className="px-2 py-1 rounded-full bg-[#3DD69E] text-green-400 bg-opacity-25">Active</div>
              ) : (
                <div className="px-2 py-1 rounded-full bg-[#B775F6] text-violet-400 bg-opacity-25">Paused</div>
              )
            }
          </div>

          <div className="flex items-center">
            {
              status === SURVEY_STATUS.ACTIVE && (
                <React.Fragment>
                  <button className="mx-4">Copy</button>
                  <button className="mx-4">Invite</button>
                  <button className="mx-4">Share</button>
                </React.Fragment>
              )
            }
            <button className="mx-4">Survey Insights</button>

            <div className="flex items-center ml-4">
              <label className="mr-4">Published</label>
              <div className={`w-16 h-8 rounded-full ${published ? 'bg-[#3DD69E]' : 'bg-[#B775F6]'}`}></div>
            </div>
          </div>
        </div>

        <span className="w-full h-[1px] bg-gray-600" />

        <div className="flex justify-between items-center w-full p-4">
          <div className="flex items-center w-full">
            <div className="w-12 h-12 bg-zinc-700 rounded-full"></div>
            <div className="flex flex-col ml-4">
              <h1 className="text-sm">{title}</h1>
              <h2 className="text-sm text-zinc-400">Survey ID: {id}</h2>
            </div>
          </div>

          <div className="flex items-center text-sm">
            {
              type && (
                <div className="flex flex-col w-36">
                  <h1 className="text-zinc-400">Survey Type</h1>
                  <p className="font-bold">{type}</p>
                </div>
              )
            }

            <div className="flex flex-col w-36">
              <h1 className="text-zinc-400">Date created</h1>
              <p className="font-bold">{date.toLocaleDateString()}</p>
            </div>

            <div className="flex flex-col w-36">
              <h1 className="text-zinc-400">Completed</h1>
              <p className="font-bold">{completed}</p>
            </div>

            <button className="mx-4">Edit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SurveryRecord;