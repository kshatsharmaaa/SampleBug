import React from 'react';
import SlotCounter from 'react-slot-counter';

export default function Counter() {
  return (
    <div className="flex flex-col items-center justify-center mb-10">
        <div className="text-2xl font-bold mb-10">Counter</div>
        <div className="grid grid-cols-3 gap-40">
            <div className="col-span-1 ">
                <div className="text-5xl font-bold flex items-center">
                    <SlotCounter value={1250} />
                    <span>+</span>
                    </div>
                <div className="flex items-center">Total Vulnerabilities <br/> Reported Till Date</div>
            </div>     
            
            <div className="col-span-1 ">
                <div className="text-5xl font-bold flex items-center">
                    <SlotCounter value={80} />
                    <span>+</span>
                    </div>
                <div className="flex items-center">Total Vulnerabilities <br/> Reported Till Date</div>
            </div>     


            <div className="col-span-1 ">
                <div className="text-5xl font-bold flex items-center">
                    <SlotCounter value={25} />
                    <span>+</span>
                    </div>
                <div className="flex items-center">Total Vulnerabilities <br/> Reported Till Date</div>
            </div>     
        </div>      
    </div>
                        
            
    
  );
}

