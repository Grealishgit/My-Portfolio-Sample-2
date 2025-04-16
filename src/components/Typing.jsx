import { TypeAnimation } from 'react-type-animation';

export const Typing = () => {
    return (
        <TypeAnimation className='text-amber-500'
            sequence={[

                'Hello there👋! Am Eugene | Khanda.',
                1000,
                'A frontend developer from Nairobi, Kenya.',
                1000,
                'I develop user based interfaces',
                1000,
                'Mobile Applications',
                1000,
                'And web based Applications',
                1000,
                'Feel free to  interact with my Portfolio',
                1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
        />
    );
};