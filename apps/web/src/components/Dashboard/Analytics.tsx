import CreateSurveyButton from '@components/CreateSurveyButton';
import LineChart from '@components/Charts/LineChart';
import SurveryRecord, { SurveryRecordProps, SURVEY_STATUS } from '@components/Dashboard/SurveryRecord';
import { Footer } from '@components/Footer/FooterDashboard';
import { useThemeMode } from '@hooks/useThemeMode';
import { Strong, Text, Flex } from '@sekmet/radix-ui-themes';
import { useEffect, useState } from 'react';

export default function Analytics() {
  const { mode } = useThemeMode();

  enum DateRange {
    All,
    Seven,
    Fourteen,
    Thirty
  }
  const [dateRange, setDateRange] = useState<DateRange>(DateRange.All);

  const dashboardData = [
    { number: 207, description: 'Avg. Sales', status: "bg-[#A855F7]" },
    // { number: 520, description: 'Total page views', style: 'bg-[#A855F7]' },
    // { number: 24, description: 'Total completions', style: 'bg-[#3DD69E]' },
    // { number: '1.35 min', description: 'Avg. Completions time', style: null },
  ];

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

  const salesData = {
    labels: ['Oct 7', 'Oct 8', 'Oct 9', 'Oct 10', 'Oct 11', 'Oct 12', 'Oct 13', 'Oct 14', 'Oct 15', 'Oct 16', 'Oct 17', 'Oct 18', 'Oct 19', 'Oct 20'],
    datasets: [
      {
        label: 'Avg. Sales',
        data: [120, 150, 170, 180, 190, 200, 207, 210, 205, 195, 190, 200, 210, 205], // Replace with your actual data points
        borderColor: '#A855F7',
        backgroundColor: '#27272A',
        pointHoverBackgroundColor: mode === 'dark' ? 'black' : "white",
        pointHoverBorderColor: mode !== 'dark' ? 'black' : "white",
      },
    ],
  };

  return (
    <div className="h-screen w-full">
      <div className="relative p-4">
        <div className="flex justify-between">
          <Text size={'8'}>
            <Strong>Analytics</Strong>
          </Text>
          <div className={`flex w-1/4 items-center justify-around rounded-[10000px] p-[3px] ` + ((mode === 'dark') ? "bg-[#1F1F22] " : "bg-[white]")}>
            <button
              className={`border-0 px-[6px] py-[12px] w-20 rounded-full ${dateRange === DateRange.All ? 'bg-transparent' : (mode === 'dark' ? 'bg-[#27272A]' : 'bg-[#E4E4E7]')
                } text-${mode === 'dark' ? 'white' : 'black'}`}
              onClick={() => setDateRange(DateRange.All)}
            >
              All
            </button>
            <button
              className={`border-0 px-[6px] py-[12px] w-20 rounded-full ${dateRange === DateRange.Seven ? (mode === 'dark' ? 'bg-[#27272A]' : 'bg-[#E4E4E7]') : 'bg-transparent'
                } text-${mode === 'dark' ? 'white' : 'black'}`}
              onClick={() => setDateRange(DateRange.Seven)}
            >
              7 days
            </button>
            <button
              className={`border-0 px-[6px] py-[12px] w-20 rounded-full ${dateRange === DateRange.Fourteen ? (mode === 'dark' ? 'bg-[#27272A]' : 'bg-[#E4E4E7]') : 'bg-transparent'
                } text-${mode === 'dark' ? 'white' : 'black'}`}
              onClick={() => setDateRange(DateRange.Fourteen)}
            >
              14 days
            </button>
            <button
              className={`border-0 px-[6px] py-[12px] w-20 rounded-full ${dateRange === DateRange.Thirty ? (mode === 'dark' ? 'bg-[#27272A]' : 'bg-[#E4E4E7]') : 'bg-transparent'
                } text-${mode === 'dark' ? 'white' : 'black'}`}
              onClick={() => setDateRange(DateRange.Thirty)}
            >
              30 days
            </button>
          </div>

        </div>

        <div className='mt-6'>
          <Flex gap={6} className="mt-6 flex-wrap">
            {dashboardData.map((card, index) => (
              <div className='w-full' key={index}>
                <div
                  className={`w-full h-full px-4 py-3 rounded-lg flex flex-col justify-start items-start gap-2 ${mode === 'dark' ? 'bg-[#27272A]' : 'bg-white'
                    }`}
                >
                  <Text
                    className={`font-['Inter'] font-semibold leading-[30px] ${mode === 'dark' ? 'text-white' : 'text-[dark-text-color]'
                      } text-[20px]`}
                  >
                    {
                      (card.status) ? <span className={`align-middle inline-block w-[8px] h-[8px] rounded-full mr-2 ${card.status}`}></span> : null
                    }
                    {card.number}
                  </Text>
                  <Text className={`font-['Inter'] font-normal leading-[20px] ${mode === 'dark' ? 'text-[#A1A1AA]' : 'text-[light-text-color]'
                    } text-[14px]`}>
                    {card.description}
                  </Text>
                </div>
              </div>
            ))}
          </Flex>
        </div>


        <div className='mt-6 relative h-[276px] w-full'>
          <LineChart chartData={salesData} mode = {mode} />
        </div>

        {/* <div className="absolute left-[43%] top-[43%] flex -translate-x-[43%] -translate-y-[43%] flex-col items-center justify-center gap-4">
          <svg
            width={48}
            height={48}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[48px] w-[48px]"F
          >
            <rect width={48} height={48} rx={24} fill="white" />
            <path
              d="M16.5 23.1667L16.5 31.5M26.5 23.1667L26.5 31.5M21.5 16.5L21.5 31.5M31.5 16.5V31.5"
              stroke="#09090B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5 23.1667L16.5 31.5M26.5 23.1667L26.5 31.5M21.5 16.5L21.5 31.5M31.5 16.5V31.5"
              stroke="black"
              strokeOpacity="0.2"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5 23.1667L16.5 31.5M26.5 23.1667L26.5 31.5M21.5 16.5L21.5 31.5M31.5 16.5V31.5"
              stroke="black"
              strokeOpacity="0.2"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p>No data to show</p>
        </div> */}
      </div>
      {/* <div className="relative px-4 py-10">
        <Text size={'7'}>
          <Strong>Survey Insights</Strong>
        </Text>
        <div className='mt-6'>
          {
            mockData.map((record: SurveryRecordProps) => (
              <SurveryRecord key={record.id} {...record} />
            ))
          }
        </div>
       
      </div> */}

      <Footer />
    </div>
  );
}
