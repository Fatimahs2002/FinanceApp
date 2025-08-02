'use client';

import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom'; 

import "../index.css";
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default function Home() {
    const cards = [
        {
            title: 'Send Money',
            subTitle: 'Transfer funds securely',
            icon: 'pi pi-send',
            description: 'Quickly send money to friends, family, or vendors with ease and security.',
            link: '/send'
        },
        {
            title: 'Receive Money',
            subTitle: 'Get paid instantly',
            icon: 'pi pi-inbox',
            description: 'Easily receive payments directly into your account from others.',
            link: '/receive'
        },
        {
            title: 'Transaction Logs',
            subTitle: 'View recent activities',
            icon: 'pi pi-book',
            description: 'Track all your transaction history in one place for easy reference.',
            link: '/logs'
        }
    ];

    return (
        <div className="flex justify-center items-center min-h-screen bg-white p-4">
        <div className="flex flex-col md:flex-row justify-center items-center w-full gap-4 p-2">
            {cards.map((card, index) => (
                <Card 
                    key={index}
                    title={card.title}
                    subTitle={card.subTitle}
                    className=" shadow-2 w-100 h-[32rem] flex flex-col justify-between "
                  
                    header={
                        <div className="flex justify-center py-4">
                           <i className={`${card.icon} icon text-[6rem] sm:text-[10rem] md:text-[10rem] lg:text-[12rem]`}></i>

                        </div>
                    }
                    footer={
                        <div className="flex justify-end">
                            <Link  to={card.link} >
                                <Button label="Go" icon="pi pi-arrow-right"  className='go font-medium px-5 py-2 rounded w-full'/>
                            </Link>
                        

                        </div>
                    }
                >
                    <p className="m-0">{card.description}</p>
                </Card>
            ))}
        </div>
        </div>
    );
}
