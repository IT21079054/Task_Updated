import React, { useState, useRef } from 'react';
import { MdFlightLand, MdFlightTakeoff } from 'react-icons/md';
import { TbArrowsRightLeft } from 'react-icons/tb';
import { WiRain } from 'react-icons/wi';
import { IoIosArrowDown } from 'react-icons/io';
import { CiSearch } from 'react-icons/ci';
import Image from 'next/image';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import { Popover } from 'react-tiny-popover';

import 'react-datepicker/dist/react-datepicker.css';

const CITY_LIST = [
  {
    city: 'Abu Dhabi',
    country: '75F - United Arab Emirates ',
  },

  {
    city: 'Accra',
    country: '75F - Ghana',
  },
  
  {
    city: 'Addis Ababa',
    country: '68C - Ethiopia',
  },
  {
    city: 'Adelaide',
    country: '36G - Australia',
  },
  {
    city: 'Algiers',
    country: '12D - Algeria',
  },
  {
    city: 'Amman',
    country: '44L - Jordan',
  },
  {
    city: 'Amsterdam',
    country: '21E - Netherlands',
  },
  {
    city: 'Auckland',
    country: '59H - New Zealand',
  },
  {
    city: 'Baghdad',
    country: '33C - Iraq',
  },
  {
    city: 'Baku',
    country: '26F - Azerbaijan',
  },
  {
    city: 'BBamako',
    country: '40B - Mali',
  },

  {
    city: 'Bangkok',
    country: '40B - Thailand',
  },

  {
    city: 'Bangui',
    country: '40B - Central African Republic',
  },

  {
    city: 'Beijingko',
    country: '40B - China',
  },

  {
    city: 'Beirut',
    country: '40B - Lebanon',
  },

  {
    city: 'Belgrade',
    country: '40B - Serbia',
  },

  {
    city: 'Berlin',
    country: '40B - Germany',
  },

  {
    city: 'Bern',
    country: '40B - Mali',
  },

  {
    city: 'BBamako',
    country: '40B - Switzerland',
  },

  {
    city: 'Bishkek',
    country: '40B - Kyrgyzstan',
  },

  {
    city: 'Bogotá',
    country: '40B - Colombia',
  },

  {
    city: 'Bratislava',
    country: '40B - Slovakia',
  },

  {
    city: 'Brazzaville',
    country: '40B - Republic of the Congo',
  },

  {
    city: 'Brussels',
    country: '40B - Belgium',
  },

  {
    city: 'Bucharest',
    country: '40B - Hungary',
  },

  {
    city: 'Bujumbura',
    country: '40B - Burundi',
  },

  {
    city: 'Cairo',
    country: '40B - Egypt',
  },

  {
    city: 'Canberra',
    country: '40B - Australia',
  },

  {
    city: 'Chisinau',
    country: '40B - Moldova',
  },

  {
    city: 'Colombo',
    country: '40B - Sri Lanka',
  },

  {
    city: 'Copenhagen',
    country: '40B - Denmark',
  },

  {
    city: 'Dakar',
    country: '40B - Senegal',
  },

  {
    city: 'Damascus',
    country: '40B - Syria',
  },

  {
    city: 'Dhaka',
    country: '40B - Bangladesh',
  },

  {
    city: 'Dodoma',
    country: '40B - Tanzania',
  },

  {
    city: 'Dublin',
    country: '40B - Ireland',
  },

  {
    city: 'Dushanbe',
    country: '40B - Tajikistan',
  },

  {
    city: 'Edinburgh',
    country: '40B - United Kingdom',
  },

  {
    city: 'Gaborone',
    country: '40B - Botswana',
  },

  {
    city: 'Georgetown',
    country: '40B - Guyana',
  },

  {
    city: 'Hanoi',
    country: '40B - Vietnam',
  },

  {
    city: 'Harare',
    country: '40B - Zimbabwe',
  },

  {
    city: 'Havana',
    country: '40B - Cuba',
  },

  {
    city: 'Helsinki',
    country: '40B - Finland',
  },

  {
    city: 'Islamabad',
    country: '40B - Pakistan',
  },

  {
    city: 'Jakarta',
    country: '40B - Indonesia',
  },

  {
    city: 'Jerusalem',
    country: '40B - Israel',
  },

  {
    city: 'Kabul',
    country: '40B - Afghanistan',
  },

  {
    city: 'Kampala',
    country: '40B - Uganda',
  },

  {
    city: 'Kathmandu',
    country: '40B - Nepal',
  },

  {
    city: 'Khartoum',
    country: '40B - Sudan',
  },

  {
    city: 'Kiev',
    country: '40B - Ukraine',
  },

  {
    city: 'Kigali',
    country: '40B - Rwanda',
  },

  {
    city: 'Kampala',
    country: '40B - Jamaica',
  },

  {
    city: 'Kinshasa',
    country: '40B - Democratic Republic of the Congo',
  },

  {
    city: 'Kuala Lumpur',
    country: '40B - Malaysia',
  },

  {
    city: 'Kuwait City',
    country: '40B - Kuwait',
  },

  {
    city: 'Libreville',
    country: '40B - Gabon',
  },

  {
    city: 'Lilongwe',
    country: '40B - Malawi',
  },

  {
    city: 'Lima',
    country: '40B - Peru',
  },

  {
    city: 'Lisbon',
    country: '40B - Portugal',
  },

  {
    city: 'Ljubljana',
    country: '40B - Slovenia',
  },

  {
    city: 'London',
    country: '40B - United Kingdom',
  },

  {
    city: 'Luanda',
    country: '40B - Angola',
  },

  {
    city: 'Lusaka',
    country: '40B - Zambia',
  },

  {
    city: 'Madrid',
    country: '40B - Spain',
  },

  {
    city: 'Majuro',
    country: '40B - Marshall Islands',
  },

  {
    city: 'Male',
    country: '40B - Maldives',
  },

  {
    city: 'Managua',
    country: '40B - Nicaragua',
  },

  {
    city: 'Manama',
    country: '40B - Bahrain',
  },

  {
    city: 'Manila',
    country: '40B - Philippines',
  },

  {
    city: 'Maputo',
    country: '40B - Mozambique',
  },

  {
    city: 'Kampala',
    country: '40B - Uganda',
  },

  {
    city: 'Maseru',
    country: '40B - Lesotho',
  },

  {
    city: 'Mbabane',
    country: '40B - Eswatini',
  },

  {
    city: 'Mexico City',
    country: '40B - Mexico',
  },

  {
    city: 'Minsk',
    country: '40B - Belarus',
  },

  {
    city: 'Monaco',
    country: '40B - Monaco',
  },

  {
    city: 'Monrovia',
    country: '40B - Liberia',
  },

  {
    city: 'Montevideo',
    country: '40B - Uruguay',
  },

  {
    city: 'Moroni',
    country: '40B - Comoros',
  },

  {
    city: 'Moscow',
    country: '40B - Russia',
  },

  {
    city: 'Muscat',
    country: '40B - Oman',
  },

  {
    city: 'Nairobi',
    country: '40B - Kenya',
  },

  {
    city: 'Nassau',
    country: '40B - Bahamas',
  },

  {
    city: 'Naypyidaw',
    country: '40B - Myanmar',
  },

  {
    city: 'N.Djamena',
    country: '40B - Chad',
  },

  {
    city: 'New Delhi',
    country: '40B - India',
  },

  {
    city: 'Niamey',
    country: '40B - Niger',
  },

  {
    city: 'Nicosia',
    country: '40B - Cyprus',
  },

  {
    city: 'Oslo',
    country: '40B - Norway',
  },

  {
    city: 'Ottawa',
    country: '40B - Canada',
  },

  {
    city: 'Ouagadougou',
    country: '40B - Burkina Faso',
  },

  {
    city: 'Panama City',
    country: '40B - Panama',
  },

  {
    city: 'Paramaribo',
    country: '40B - Suriname',
  },

  {
    city: 'Paris',
    country: '40B - France',
  },

  {
    city: 'Podgorica',
    country: '40B - Montenegro',
  },

  {
    city: 'Rome',
    country: '40B - Italy',
  },

  {
    city: 'Tokyo',
    country: '40B - Japan',
  },

  {
    city: 'Victoria',
    country: '40B - Seychelles',
  },

  {
    city: 'Vientiane',
    country: '40B - Laos',
  },

  {
    city: 'Wellington',
    country: '40B -  New Zealand',
  },

  {
    city: 'Zürich',
    country: '40B - Switzerland',
  },

  
];

const BannerFilter = () => {
  const [fromCity, setFromCity] = useState(CITY_LIST[0]);
  const [toCity, setToCity] = useState(CITY_LIST[1]);
  const [departDate, setDepartDate] = useState(moment().format());
  const [returnDate, setReturnDate] = useState(moment().add(7, 'days'));
  const [travelersCount, setTravelersCount] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });
  const [travelerClass, setTravelerClass] = useState('economy');
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const departCalenderRef = useRef(null);
  const returnCalenderRef = useRef(null);

  const onSearchClick = () => {
    const travelForm = {
      from: fromCity,
      to: toCity,
      departoOn: departDate,
      returnOn: moment(returnDate).format(),
      travelers: travelersCount,
      travelerClass,
    };

    console.log(travelForm);
  };

  return (
    <>
      <div className="pl-4 md:pl-[12%] pt-24 md:pt-32 pb-12">
        <div className="text-[32px] md:text-[36px] font-bold">
          <div> Exploring the world</div>
          <div className="mt-[-8px]"> In Comfort. Enjoy Your Life</div>
        </div>
        <div>
          <div className="relative">
            <div className="flex w-[96%] md:w-[480px] mt-8 cp">
              <div className="w-1/2 bg-blue-100 p-2 rounded mr-5">
                <div className="flex justify-between text-[12px] font-medium">
                  <div>From</div>
                  <MdFlightTakeoff className="text-[16px] mt-[-2px]" />
                </div>
                <div className="text-[20px] font-bold text-blue-900">
                  <select
                    name="from"
                    id="from"
                    className="bg-blue-100 ml-[-4px] focus:border-none active:border-none focus:outline-none active:outline-none"
                    onChange={(e) => {
                      const cityDetails = CITY_LIST.filter(
                        (list) => list.city === e.target.value
                      );
                      setFromCity(cityDetails[0]);
                    }}
                  >
                    {CITY_LIST.map((item, i) => {
                      return (
                        <option value={item.city} key={i}>
                          {item.city}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="text-[14px] font-medium mt-[-4px]">
                  {fromCity.country}
                </div>
              </div>
              <div className="w-1/2 bg-blue-100 p-2 pl-6 rounded">
                <div className="flex justify-between text-[12px] font-medium">
                  <div>To</div>
                  <MdFlightLand className="text-[16px] mt-[-2px]" />
                </div>
                <div className="text-[20px] font-bold text-blue-900 cp">
                  <select
                    name="from"
                    id="from"
                    className="bg-blue-100 ml-[-4px] focus:border-none active:border-none focus:outline-none active:outline-none"
                    onChange={(e) => {
                      const cityDetails = CITY_LIST.filter(
                        (list) => list.city === e.target.value
                      );
                      setToCity(cityDetails[0]);
                    }}
                  >
                    {CITY_LIST.map((item, i) => {
                      return (
                        <option value={item.city} key={i}>
                          {item.city}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="text-[14px] font-medium mt-[-4px]">
                  {toCity.country}
                </div>
              </div>
            </div>
            <div className="bg-emerald-400 h-10 w-10 rounded-full flex absolute bottom-[20px] left-[43%] md:left-[220px]">
              <TbArrowsRightLeft
                className="text-white mx-auto self-center cp"
                onClick={() => {
                  setFromCity(toCity);
                  setToCity(fromCity);
                }}
              />
            </div>
          </div>
          <div className="flex mt-2 w-[96%] md:w-[480px]">
            <div className="bg-blue-100 p-2 rounded mr-2 w-4/12 cp">
              <div className="text-[12px] font-medium">Depart On</div>

              <div
                className="text-[28px] font-bold text-blue-900"
                onClick={() => {
                  if (departCalenderRef.current) {
                    departCalenderRef.current.setOpen(true);
                  }
                }}
              >
                {moment(departDate).format('L').split('/')[1]}
              </div>
              <DatePicker
                id="Depart"
                name="Depart"
                ref={departCalenderRef}
                className="hidden"
                selected={moment(departDate).format('llll')}
                onChange={(date) => setDepartDate(moment(date).format())}
                withPortal
              />
              <div
                className="text-[13px] font-medium mt-[-8px] mt-[-20px]"
                onClick={() => {
                  if (departCalenderRef.current) {
                    departCalenderRef.current.setOpen(true);
                  }
                }}
              >
                {moment(departDate).format('ll')}
              </div>
              <div className="flex">
                <WiRain className="text-[42px] mt-[-2px] text-blue-800" />
                <div>
                  <p className="font-bold">29.6 C</p>
                  <p className="text-[10px] font-medium">Moderate Rain</p>
                </div>
              </div>
            </div>
            <div className="bg-blue-100 p-2 rounded mr-2 w-4/12 cp">
              <div className="text-[12px] font-medium">Return On</div>
              <div
                className="text-[28px] font-bold text-blue-900"
                onClick={() => {
                  if (returnCalenderRef.current) {
                    returnCalenderRef.current.setOpen(true);
                  }
                }}
              >
                {moment(returnDate).format('L').split('/')[1]}
              </div>
              <DatePicker
                id="return"
                name="return"
                ref={returnCalenderRef}
                className="hidden"
                selected={moment(returnDate).format('llll')}
                onChange={(date) => setReturnDate(moment(date).format())}
                withPortal
              />
              <div
                className="text-[13px] font-medium mt-[-8px] mt-[-20px]"
                onClick={() => {
                  if (returnCalenderRef.current) {
                    returnCalenderRef.current.setOpen(true);
                  }
                }}
              >
                {moment(returnDate).format('ll')}
              </div>
              <div className="text-[10px] text-center border border-black rounded py-1 text-gray-600">
                Temperature Date Not Available
              </div>
            </div>
            <div className="bg-blue-100 p-2 rounded w-6/12 cp">
              <div className="text-[12px] font-medium">Travelers & Class</div>
              <Popover
                isOpen={isPopoverOpen}
                positions={['bottom', 'left', 'right']}
                content={
                  <div className="h-[160px] w-[180px] p-[8px] bg-blue-100 rounded shadow text-[12px]">
                    <div className="w-[96%] mx-auto my-2 flex justify-between">
                      <div>Adults</div>
                      <div className="flex justify-around">
                        <div
                          className="rounded-full h-[22px] w-[22px] border border-black flex justify-center cp"
                          onClick={() => {
                            travelersCount.adults > 1 &&
                              setTravelersCount({
                                ...travelersCount,
                                adults: travelersCount.adults - 1,
                              });
                          }}
                        >
                          <div className="self-center">-</div>
                        </div>
                        <div className="mx-2 flex">
                          <div className="self-center w-2 text-center">
                            {travelersCount.adults}
                          </div>
                        </div>
                        <div
                          className="rounded-full h-[22px] w-[22px] border border-black flex justify-center cp"
                          onClick={() => {
                            setTravelersCount({
                              ...travelersCount,
                              adults: travelersCount.adults + 1,
                            });
                          }}
                        >
                          <div className="self-center">+</div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[96%] mx-auto my-2 flex justify-between">
                      <div>Children</div>
                      <div className="flex justify-around">
                        <div
                          className="rounded-full h-[22px] w-[22px] border border-black flex justify-center cp"
                          onClick={() => {
                            travelersCount.children > 0 &&
                              setTravelersCount({
                                ...travelersCount,
                                children: travelersCount.children - 1,
                              });
                          }}
                        >
                          <div className="self-center">-</div>
                        </div>
                        <div className="mx-2 flex">
                          <div className="self-center w-2 text-center">
                            {travelersCount.children}
                          </div>
                        </div>
                        <div
                          className="rounded-full h-[22px] w-[22px] border border-black flex justify-center cp"
                          onClick={() => {
                            setTravelersCount({
                              ...travelersCount,
                              children: travelersCount.children + 1,
                            });
                          }}
                        >
                          <div className="self-center">+</div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[96%] mx-auto my-2 flex justify-between">
                      <div>Room</div>
                      <div className="flex justify-around">
                        <div
                          className="rounded-full h-[22px] w-[22px] border border-black flex justify-center cp"
                          onClick={() => {
                            travelersCount.rooms > 1 &&
                              setTravelersCount({
                                ...travelersCount,
                                rooms: travelersCount.rooms - 1,
                              });
                          }}
                        >
                          <div className="self-center">-</div>
                        </div>
                        <div className="mx-2 flex">
                          <div className="self-center w-2 text-center">
                            {travelersCount.rooms}
                          </div>
                        </div>
                        <div className="rounded-full h-[22px] w-[22px] border border-black flex justify-center cp">
                          <div
                            className="self-center"
                            onClick={() => {
                              setTravelersCount({
                                ...travelersCount,
                                rooms: travelersCount.rooms + 1,
                              });
                            }}
                          >
                            +
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              >
                <div
                  className="text-[18px] font-bold text-blue-900"
                  onClick={() => {
                    setIsPopoverOpen(!isPopoverOpen);
                  }}
                >
                  {travelersCount.adults + travelersCount.children} Travelers,{' '}
                  {travelersCount.rooms} Room
                </div>
              </Popover>
              <div className="text-[24px] font-bold text-blue-900 mt-[-4px]">
                {
                  <select
                    name="from"
                    id="from"
                    className="bg-blue-100 ml-[-4px] focus:border-none active:border-none focus:outline-none active:outline-none"
                    onChange={(e) => {
                      setTravelerClass(e.target.value);
                    }}
                  >
                    <option value={'economy'}>Economy</option>
                    <option value={'bussiness'}>Bussiness</option>
                  </select>
                }
              </div>

              <div className="text-[13px] font-medium mt-[14px] z-100">
                {travelersCount.adults} Adults, {travelersCount.children} Childs
              </div>
            </div>
          </div>
          <div className="w-[96%] md:w-[480px] flex mt-2">
            <div className="flex">
              <div className="flex w-[141px]">
                <div className="flex border-r-2	border-black pr-1 mr-1 self-center">
                  <p className="text-[12px] font-bold">Return</p>{' '}
                  <IoIosArrowDown className="mt-[2px]" />
                </div>
                <div className="flex self-center">
                  <input type="radio" id="" name="" value="direct" />
                  <label
                    htmlFor="direct"
                    className="text-[12px] font-bold ml-1"
                  >
                    Direct
                  </label>
                </div>
              </div>
            </div>
            <button
              className="bg-blue-900 text-white p-2 rounded w-full flex justify-center"
              onClick={() => {
                onSearchClick();
              }}
            >
              <CiSearch className="mr-1 text-[24px]" />
              <p className="text-[12px] self-center">SEARCH</p>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <Image
          src="/tourist1.webp"
          alt="tourist1"
          className="absolute right-36 w-60 h-[428px] top-[40vh] border-4 border-white transform skew-x-[-10deg] object-cover"
          width={220}
          height={420}
          unoptimized
        />
        <Image
          src="/flight.jpg"
          alt="flight"
          className="absolute right-[-48px] w-60 h-[540px] top-[10vh] transform skew-x-[-10deg] object-cover"
          width={220}
          height={420}
          unoptimized
        />
      </div>
      <div className="w-full h-16 my-gradiant-bg"></div>
    </>
  );
};

export default BannerFilter;
