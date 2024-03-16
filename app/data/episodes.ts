export interface IEpisodes {
    id: number
    title: string
    description: string
    type: string
    image: string
}

export const mockEpisodes:IEpisodes[] = [
    {
        id: 1,
        title: 'Should you get outboard audio gear?',
        description: 'Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up.',
        image: '/images/episodes/1.png',
        type: 'Gear'
    },
    {
        id: 2,
        title: 'Mic tricks to take you to the next level',
        description: 'Stop rolling with those default settings on your mic. These small tweaks will take you from sounding good to great.',
        image: '/images/episodes/2.png',
        type: 'Tips & Tricks'
    },
    {
        id: 3,
        title: 'The best microphone under $200',
        description: 'With so many microphones on the market, how are you supposed to know what’s the best? Take a look at our top picks.',
        image: '/images/episodes/3.png',
        type: 'Gear'
    }
]