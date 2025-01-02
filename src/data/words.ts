import { Word, Category } from '../types/game';

const createWords = (category: Category, words: string[]): Word[] =>
    words.map((word, index) => ({
        id: index,
        word,
        category,
    }));

export const wordsByCategory: Record<Category, Word[]> = {
    'Sports': createWords('Sports', [
        'Basketball', 'Soccer', 'Tennis', 'Football', 'Baseball',
        'Golf', 'Hockey', 'Swimming', 'Boxing', 'Volleyball'
    ]),
    'Movies & TV': createWords('Movies & TV', [
        'Stranger Things', 'Star Wars', 'Friends', 'Breaking Bad',
        'The Office', 'Marvel', 'Game of Thrones', 'Batman', 'Titanic'
    ]),
    'Places': createWords('Places', [
        'Paris', 'New York', 'Beach', 'Mountain', 'Airport',
        'Hospital', 'School', 'Park', 'Restaurant', 'Mall'
    ]),
    'Fun and Games': createWords('Fun and Games', [
        'Monopoly', 'Chess', 'Video Games', 'Puzzle', 'Hide and Seek',
        'Tag', 'Jenga', 'Cards', 'Bowling', 'Karaoke'
    ]),
    'People': createWords('People', [
        'Teacher', 'Doctor', 'Artist', 'Chef', 'Athlete',
        'Musician', 'Scientist', 'Actor', 'Firefighter', 'Pilot'
    ])
};