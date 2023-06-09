import { IconCalendar, IconLocation, IconUsers } from "@tabler/icons-react";
import moment from "moment";
import React from "react";

interface EventCardProps {
    id: string,
    name: string,
    time: number,
    city: string,
    description: string,
    image: string,
    isRemote: boolean,
}

const EventCard = ({ id, name, time, city, description, image, isRemote }: EventCardProps) => {
    return (
        <a href={`/event/${id}`}>
            <div
                className="-z-30 block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-700">
                <div
                    className="overflow-hidden h-44 bg-cover bg-no-repeat -z-20"
                >
                    <img
                        className="object-contain rounded-t-lg h-5/10 -z-10"
                        src={image}
                        alt="" />

                </div>
                <div className="p-6">
                    <h5
                        className="text-2xl font-extrabold leading-tight text-slate-100">
                        {name}
                    </h5>
                    <div className="my-4">
                        <p className="text-lg font-semibold text-slate-300">
                            {description.slice(0, 75) + "..."}
                        </p>
                    </div>
                    <div className="w-full mb-4 grid grid-rows-2 gap-x-4 gap-y-4">
                        <div className="flex">
                            <IconLocation size={24} color="white" />
                            {isRemote ? (
                                <p className="ml-2 text-lg font-bold text-slate-200">Remote</p>
                            ) : (
                                <p className="ml-2 text-lg font-bold text-slate-200">{city}</p>
                            )}
                        </div>
                        <div className="flex">
                            <IconCalendar size={24} color="white" />
                            <p className="ml-2 text-lg font-bold text-slate-200">{moment.unix(time).calendar()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default EventCard;