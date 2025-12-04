import { SkillsInfo } from '../../constants';

export function Skills() {
    return (
        <section
            id='skills'
            className='py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans '>
            {/* Section title */}
            <div className='text-center mb-8'>
                <h2 className='text-3xl text-white sm:text-4xl font-bold'>SKILLS</h2>
                <div className='w-24 h-1 bg-[#8245ec] mx-auto mt-1'></div>
                <p className='mt-4 text-lg text-gray-400 font-semibold'>A collection of my skills and experiences gained through various projects and experiences</p>
            </div>

            {/* Skills categories */}
            <div className='flex flex-wrap justify-between gap-1 lg:gap-5 py-10'>
                {SkillsInfo.map((category) => (
                    // Category cards
                    < div
                        key={category.title}
                        className='bg-gray-900 rounded-2xl border border-white px-6 py-8 mb-10 w-full sm:px-10 sm:py-6 sm:w-[48%]'
                    >
                        <h3 className='text-2xl sm:text-3xl text-gray-400 font-semibold text-center mb-4'>
                            {category.title}
                        </h3>

                        {/* Skills items */}
                        < div className='grid md:grid-cols-2 sm:grid-cols-1 gap-3' >
                            {
                                category.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className='flex items-center justify-center space-x-2 rounded-3xl border-2 border-gray-700 py-2 px-2 text-center'
                                    >
                                        {/* Skill logo */}
                                        <img src={skill.logo}
                                            alt={`${skill.name} Logo`}
                                            className='w-6 h-6 sm:w-8 sm:h-8'
                                        />
                                        {/* Skill name */}
                                        <span className='text-xs sm:text-sm text-gray-300'>
                                            {skill.name}
                                        </span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
                }
            </div >
        </section >
    );
}