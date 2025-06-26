'use client';

export default function Header() {
    return (
        <div className="flex justify-between items-center px-6 py-6  rounded-md w-full font-ibm ">
            {/* Left Greeting */}
            <div>
                <p className="text-[#7289CC] font -[600] text-[26.86px]">Hello, Welcome Back</p>
                <h1 className="text-[#3954A5] font -[700] text-[32px] uppercase">Jhon!</h1>
            </div>

            {/* Right Summary Cards */}
            <div className="flex space-x-4">
                <Card title="Open Opportunities" value="14.1k+"  />
                <Card title="Total Pipeline Value" value="$155"  />
                <Card title="Win Rate" value="25+"  />
            </div>
        </div>
    );
}

function Card({ title, value,  }) {
    return (
        <div
            className={` px-6 py-4 rounded-md shadow-sm border-t-2 header-card-custom-gradient-box font-ibm hover-gradient-border `}
        >
            <p className="text-[14px] text-[#3954A5] font-[500]">{title}</p>
            <p className="text-[30px] text-[#3954A5] font-[500]">{value}</p>
        </div>
    );
}
