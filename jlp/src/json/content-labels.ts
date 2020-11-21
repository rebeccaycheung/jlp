export const GETTING_HELP = 'gettingHelp';
export const FAMILY_VIOLENCE = 'familyViolence';
export const SUPPORT_FRIEND = 'supportFriend';
export const ABOUT = 'about';
export const QUIZ = 'quiz';
export const QUIZ_FRIEND = 'quizFriend';

export const contentLabels = {
    [GETTING_HELP]: {
        ring: {
            title: `Ringing the police`,
            content: [
                `If you or someone else is in danger, do not wait: call the police for help on 000. Their job is to ensure 
            your safety and to investigate if a crime has been committed. Even if it is not a crime, the police and other 
            services can help protect you.`,
                `You can contact the police at any time to report abuse that has happened to you, even if it happened months or years ago. 
            If you want the police to charge the person with a crime, you will need to make a ‘statement’ that describes what happened. 
            The police will type what you told them, investigate it and decide whether there is enough evidence to charge the person 
            with a criminal offence.`
            ],
        },
        help: {
            title: `Who can help?`,
            specialist: {
                content: [`A number of specialist support services exist which can provide services such as:`],
                list: [
                    'Working with Police and Court Support - link to EDVOS and other agencies',
                    'Housing assistance',
                    'Family violence and pregnancy',
                    'Counselling and support groups - Call Safe Steps on 1800 015 188',
                    'Family violence and animal abuse',
                    'Men’s intake and referrals'
                ],
            },
            protect: {
                content: [`To protect those suffering from family violence, there are a number of specialist government services available including:`],
                list: [
                    `Safe steps Family Violence Response Centre which provides confidential support and information for women and children living with 
                    family violence. https://www.safesteps.org.au/`,
                    `Men’s Referral Service which is an anonymous and confidential telephone service for men. https://www.ntv.org.au/`,
                    `The Orange Door - which is a collection of hubs which is a free service for adults, children and young people who are experiencing or have 
                    experienced family violence. https://orangedoor.vic.gov.au/`
                ],
            }
        },
        counselling: {
            title: `Counselling and support`,
            content: [
                `1800RESPECT (1800 737 732)
                A 24 hour national sexual assault, family and domestic violence counselling line for any Australian who has experienced, or is at risk of, family and 
                domestic violence and/or sexual assault.`,
                `LIFELINE (13 11 14)
                A national number that can help put you in contact with a crisis service in your state, available to anyone experiencing a personal crisis or 
                thinking about suicide.`,
                `RELATIONSHIPS AUSTRALIA (1300 364 277)
                Provides support groups and counselling on relationships, and for abusive and abused partners.`,
                `ABORIGINAL FAMILY DOMESTIC VIOLENCE HOTLINE (1800 019 123)
                Provides support for Aboriginal victims of crime who would like information on their rights, how to access counselling and financial assistance.`,
                `TRANSLATING & INTERPRETING SERVICE (131 450)
                Provides free access to a telephone or on-site interpreter in your own language, available 24 hours, every day of the year.`
            ],
        },
        legal: {
            title: `Legal support`,
            content: [
                `While it is normal to feel nervous about seeking support, these services will help you understand if you feel nervous and can help you feel comfortable talking to them.`,
                `Remember: you have a right to get support and help. The abuse is not your fault.`,
                `Victorian Legal Aid`,
                `Phone 1300 792 387, Monday to Friday from 8am to 6pm.`,
                `You can call Victorian Legal Aid for free information about family violence intervention orders and how they can help you. 
                If they can’t help you directly, they will refer you to other organisations that can.`,
                `Your local community legal service may be able to give you legal information and advice, and potentially also advice and 
                representation at court. Most services are free.`,
                `The Women’s Legal Service Victoria provides free confidential legal information, advice representation and referral to women.`,
                `Djirra helps Aboriginal and Torres Strait Islander victims of family violence and sexual assault and works with families and communities 
                affected by violence.`,
                `You can also find a private lawyer near you through the Law Institute of Victoria’s Legal Referral Service. All law firms included in the 
                Legal Referral Service provide a free 30-minute interview. If you book an interview, write your questions down beforehand, so you get as much 
                out of the free 30 minutes as possible. If you discuss getting further help from the lawyer, make sure you know how much it will cost.`
            ],
        },
        order: {
            title: `Intervention order`,
            listTitle: [
                `An intervention order is intended to protect you from experiencing violence from another person. It includes conditions that can prevent a person from:`
            ],
            list: [
                `Committing family violence against you (including emotional, financial, physical, psychological or sexual abuse)`,
                `Damaging or threatening to damage your property`,
                `Contacting you (including by text or email)`,
                `Coming within 200m of your school, home or work, or come within 5m of you`,
                `Get anyone else to do any of those things`
            ],
            content: [
                `You can apply for an intervention order to protect you here:`,
                `https://www.mcv.vic.gov.au/form-finder/application-family-violence-intervention-order-fvio1.`,
                `It is always a good idea to get legal advice before applying.`,
                `If an intervention order is broken, the police can arrest them and charge them with a criminal offence. 
                This could result in a criminal record and penalties such as jail time or fines. These orders are enforceable 
                anywhere in Australia. In an emergency, please call 000.`,
                `Reporting a breach of an IVO`,
                `Keep a diary of every breach, writing down dates, times and exactly what happened and what was said. Further, 
                no breach of an IVO condition is too small for police to act on a report that the IVO conditions have been broken. 
                When you report a breach, the police will take a signed statement, interview the respondent and any witnesses before
                deciding whether to make any charges.`
            ]
        }
    },
    [FAMILY_VIOLENCE]: {
        violence: {
            title: `What is family violence?`,
            content: [
                `“Family violence” is a term used to describe any violent, threatening, coercive or controlling behaviour 
                that occurs between people who share or have shared a family or intimate relationship.`,
                `Family violence is not limited to physical violence but includes:`
                ],
            list: [
                'direct or indirect threats',
                'sexual assault',
                'emotional and psychological torment',
                'economic control',
                'damage to property',
                'social isolation',
                'any behaviour which causes a person to live in fear'
            ],
            content1: [
                `A person can still suffer from family violence even if the relationship between the perpetrator and the 
                victim no longer exists.`,
                `Family violence can occur in a range of scenarios, such as between elderly adults and their children, or 
                between siblings. Most commonly however, family violence is perpetrated by current or previous male partners 
                against female partners.`,
                `Family violence has very serious impacts on both individual sufferers and on society:`
            ],
            list2: [
                'It is the leading contributor to preventable death, disability and illness in Victorian women aged 15 to 44',
                'It results in at least one woman being admitted to hospital every three hours',
                'One in five women had experienced violence from a current or previous partner since the age of 15',
                'In 2015 intimate partner violence contributed 41% of homicide & violence burden, 19% each of suicide & self-inflicted injuries and depressive disorders burden and 18% of early pregnancy loss burden'
            ],
            content2: [
                `The psychological and social effects of family violence can include:`
            ],
            list3: [
                'Feelings of self-blame and shame',
                'Loss of self-esteem',
                'Isolation from others',
                'Depression',
                'Anxiety',
                'Loss of employment opportunities'
            ],
            content3: [
                `The use of violence against a family member or intimate partner is a choice: an abuser chooses to use coercive or 
                violent behaviour to have power and control over somebody else, even if they try to make excuses for themselves and 
                their behaviour.`,
                `While the use of family violence is a choice, there are broader factors in our society that enable family violence 
                to exist. Gender inequity - the unequal treatment of men and women - racism, classism and a range of other factors 
                all contribute to the problem.`,
                `Only by raising awareness of family violence, and holding perpetrators accountable, can we hope to eradicate this 
                social problem.`,
                `For more information about family violence and what is being done to prevent it visit:`
            ],
        },
        say: {
            title: `What does the law say?`,
            content: [
                `Under the Victorian government Family Violence Protection Act 2008, family violence is defined as:
                (a) behaviour by a person towards a family member of that person if that behaviour`
            ],
            list: [
                'Is physically or sexually abusive or',
                'Is emotionally or psychologically abusive or',
                'Is economically abusive or',
                'Is threatening or',
                'Is coercive or',
                `In any other way controls or dominates the family member and causes that family member to feel fear for the safety 
                or wellbeing of that family member or another person`
            ],
            content1: [
                `Or (b) behaviour by a person that causes a child to hear or witness, or otherwise be exposed to the effects of, 
                behaviour referred to in paragraph (a).`,
                `The Victorian government recognises that:`
            ],
            list1: [
                'Family violence violates human rights',
                'Family violence is not acceptable in any community or culture',
                'Family violence can seriously affect the emotional, physical and psychological wellbeing of children'
            ],
        },
        definitions: {
            title: `Definitions`,
            content: [
                `Intimate partner abuse: violent behaviour used by a current or former spouse or partner against the 
                other spouse or partner.`,
                `Dating abuse: violent behaviour used by a casual partner against the other partner.`,
                `Child abuse: violent behaviour or mistreatment towards a child or young person by a parent or caregiver. 
                Under Victorian law, exposing a child to any form of family violence is also a reportable child abuse offence – 
                so if a person is abusive towards their spouse in front of their child or children, child abuse has occurred.`,
                `Elder abuse: violent behaviour or mistreatment towards an older person by a partner or family member, often including financial abuse, 
                controlling behaviours and/or negligence.`,
                `Parental abuse: violent behaviour towards a parent by an adolescent child or dependant.`
            ]
        }
    },
    [SUPPORT_FRIEND]: {
        background: {
            title: `Background Information`,
            content: [
                `It can be really difficult for you to watch your friend go through an abusive, or even just bad relationship. 
                It can be hard to know what the right thing to do is, and how to make sure your friend get the support they need, 
                without hurting yourself or your friendship.`,
                `Your friend might have a very different point of view from you - they might not think the relationship is abusive, 
                or might feel responsible for any abuse they’ve gone through. It might be difficult for your friend to even have a 
                conversation about their relationship.`,
                `Even if your friend realises the relationship is abusive, they might still choose to stay, or will get back together 
                with their partner lots of times.`,
                `This may be frustrating, but the decision to leave can only be made by the person experiencing the abuse, 
                and leaving the relationship may expose them to more danger.`,
                `If they stay, they will still need support from friends and family. If they leave, they may feel sad and 
                lonely and need support.`
            ]
        },
        help: {
            title: `What can I do to help?`,
            content: [
                `Don’t be afraid to reach out to a friend who you think needs help`,
                `Focus on your friend’s feelings and make them feel supported, rather than on their partner`,
                `Be supportive and listen patiently. Acknowledge their feelings and be respectful of their decisions`,
                `If they break up with the abusive partner, continue to be supportive after the relationship is over`,
                `Even when you feel like there’s nothing you can do, don’t forget that by being supportive and caring, 
                you’re already doing a lot`,
                `Don’t contact their abuser or publicly post negative things about them online. It’ll only worsen the 
                situation for your friend`
            ],
        },
        conversation: {
            title: `If they don’t feel comfortable with the conversation:`,
            content: [
                `Don’t push the conversation too hard`,
                `Maintain your friendship and connection`,
                `Look out for their emotional wellbeing`,
                `Make sure they don’t start blaming themselves for things`,
                `Affirm that they are a good and valuable person`,
                `Tell them that you’re concerned for their safety and want to help`,
                `Help your friend recognize that the abuse is not “normal” and is NOT their fault. Everyone deserves a healthy, non-violent relationship`,
                `Connect your friend to resources in their community that can give them information and guidance - SEE EMOTIONAL RESOURCES and LEGAL RESOURCES`
            ],
        },
        looking: {
            title: `Looking after yourself`,
            content: [
                `While it’s important to be there for your friend, it’s also important to look after yourself. 
                It is easy to get sucked into very late nights and lots of emotional labour when you are supporting your friend`,
                `It is ok to set boundaries with your friend`,
                `You can say that it is time for you to go to bed, or recommend that they see a counsellor because 
                you cannot give them all the advice or support they need`,
                `You don’t have to be solely responsible for your friend’s wellbeing`,
                `If you feel like you aren’t coping with the pressure, it is a good idea to seek emotional resources yourself`
            ]
        }
    },
    [ABOUT]: {
        title: `About us`,
        content: [
            `The Royal Commission into Family Violence in 2016 identified a need for preventative measures to
        prevent situations from reaching crisis point. With the help of industry professionals, we found a gap in services 
        and access to information for young adults. This website aims to help young adults identify the signs of family 
        violence in their own, and friends’, relationships. It offers holistic advice about the options available to them 
        at early stages of family violence.`,
            `This project started with the Just Leadership Program, an initiative of the Monash Law Students’ Society Social Justice and Equity portfolio.
        This program affords students an opportunity to learn from high profile speakers associated with social justice 
        in the law. As the Women’s Rights group, we were responsible for creating a project that would further gender equity.`,
        ],
    },
    [QUIZ]: [
        {
            "index": 1,
            "question": "Do you have close relationships with your friends or family?",
            "points": {
                "1": 0.75,
                "2": 1,
                "3": 2
            },
            "text": {
                "1": "Yes, I have strong relationships with friends and family",
                "2": "I have some close relationships with friends or family",
                "3": "No, I have no close relationships with friends or family"
            },
            "popUp": "this is a test pop up"
        },
        {
            "index": 2,
            "question": "Does your partner ever discourage you from spending time with your friends or family?",
            "points": {
                "1": 0,
                "2": 5,
                "3": 10
            },
            "text": {
                "1": "My partner never discourages me from spending time with my friends and family",
                "2": "My partner sometimes discourages me from spending time with my friends and family",
                "3": "My partner often discourages me from spending time with my friends and family"
            }
        },
        {
            "index": 3,
            "question": "Does your partner act jealously or obsessively over you?",
            "points": {
                "1": 0,
                "2": 5,
                "3": 10
            },
            "text": {
                "1": "My partner is never jealous or obsessive over me",
                "2": "My partner is sometimes jealous and/or obsessive over me",
                "3": "My partner is often jealous and/or obsessive over me"
            }
        },
        {
            "index": 4,
            "question": "Does your partner check your phone or social media to look at who you’ve been talking to?",
            "points": {
                "1": 0,
                "2": 5,
                "3": 10
            },
            "text": {
                "1": "My partner never checks my phone or social media",
                "2": "My partner sometimes checks my phone or social media",
                "3": "My partner often checks my phone or social media"
    
            }
        },
        {
            "index": 5,
            "question": "Does your partner experience mental health issues? e.g. depression, anxiety.",
            "points": {
                "1": 0.9,
                "2": 1,
                "3": 1.5
            },
            "text": {
                "1": "No, they do not experience any mental health issues",
                "2": "They occasionally experience mental health issues",
                "3": "Yes, they do experience mental health issues"
            }
        },
        {
            "index": 6,
            "question": "If you answered yes to question 5, has your partner ever threatened to commit suicide or blamed you for their mental health problems?",
            "points": {
                "1": 50,
                "2": 40,
                "3": 0
            },
            "text": {
                "1": "Yes, my partner often does this",
                "2": "My partner occasionally does this",
                "3": "No, my partner does not do this"
            }
        },
        {
            "index": 7,
            "question": "Have you recently been pregnant or given birth?",
            "points": {
                "1": 1,
                "2": 2,
                "maybe": null
            },
            "text": {
                "1": "No",
                "2": "Yes",
                "maybe": null
            }
        },
        {
            "index": 8,
            "question": "Do you regularly use drugs or alcohol? E.g. more than three standard twice a week.",
            "points": {
                "1": 0,
                "2": 5,
                "3": 10
            },
            "text": {
                "1": "Never",
                "2": "Sometimes",
                "3": "Yes"
            }
        },
        {
            "index": 9,
            "question": "Does your partner regularly use drugs or alcohol? e.g. more than three times a week",
            "points": {
                "1": 0,
                "2": 5,
                "3": 10
            },
            "text": {
                "1": "No, my partner does not do this",
                "2": "My partner sometimes does this",
                "3": "Yes, my partner often does this"
            }
        },
        {
            "index": 10,
            "question": "Does your partner break or throw objects when they are angry?",
            "points": {
                "1": 0,
                "2": 50,
                "3": 60
            },
            "text": {
                "1": "No, my partner does not do this",
                "2": "My partner sometimes does this",
                "3": "Yes, my partner often does this"
            }
        },
        {
            "index": 11,
            "question": "Has your partner ever threatened to physically harm you or someone close to you? (This may include pets)",
            "points": {
                "1": 0,
                "2": 50,
                "3": 60
            },
            "text": {
                "1": "No, my partner does not do this",
                "2": "My partner sometimes does this",
                "3": "Yes, my partner often does this"
            }
        },
        {
            "index": 12,
            "question": "Has your partner ever physically harmed you?",
            "points": {
                "1": 0,
                "2": 50,
                "3": 60
            },
            "text": {
                "1": "No, my partner does not do this",
                "2": "My partner sometimes does this",
                "3": "Yes, my partner often does this"
            }
        },
        {
            "index": 13,
            "question": "Do you experience mental health issues, such as depression or anxiety?",
            "points": {
                "1": 1,
                "2": 1.5,
                "3": 2
            },
            "text": {
                "1": "Never",
                "2": "Sometimes",
                "3": "Yes, I do"
            }
        },
        {
            "index": 14,
            "question": "Does your partner want to know where you are at all times?",
            "points": {
                "1": 0,
                "2": 5,
                "3": 10
            },
            "text": {
                "1": "No, my partner does not do this",
                "2": "My partner sometimes does this",
                "3": "Yes, my partner often does this"
            }
        },
        {
            "index": 15,
            "question": "Does your partner call/text you constantly, and get angry if you do not respond?",
            "points": {
                "1": 0,
                "2": 10,
                "3": 20
            },
            "text": {
                "1": "No, my partner does not do this",
                "2": "My partner sometimes does this",
                "3": "Yes, my partner often does this"
            }
        },
        {
            "index": 16,
            "question": "Has your partner ever pressured you to do something sexual that you did not want to do?",
            "points": {
                "1": 0,
                "2": 50,
                "3": 60
            },
            "text": {
                "1": "No, my partner does not do this",
                "2": "My partner sometimes does this",
                "3": "Yes, my partner often does this"
            }
        },
        {
            "index": 17,
            "question": "Has your partner been violent in situations that did not involve you? e.g. getting into physical fights with other people?",
            "points": {
                "1": 50,
                "2": 10,
                "3": 60
            },
            "text": {
                "1": "No, my partner never does this",
                "2": "My partner sometimes does this",
                "3": "Yes, my partner often does this"
            }
        }
    ],
    [QUIZ_FRIEND]: [
        {
            "index": 1,
            "question": "Do your friend close relationships with your friends or family?",
            "points": {
                "1": 0.75,
                "2": 1,
                "3": 2
            },
            "text": {
                "1": "Yes, my friend have strong relationships with friends and family",
                "2": "My friend have some close relationships with friends or family",
                "3": "No, my friend have no close relationships with friends or family"
            },
            "popUp": "this is a test pop up"
        },
        {
            "index": 2,
            "question": "Does your friend’s your partner ever discourage you from spending time with your friends or family?",
            "points": {
                "1": 0,
                "2": 5,
                "3": 10
            },
            "text": {
                "1": "Their partner never discourages me from spending time with my friends and family",
                "2": "Their partner sometimes discourages me from spending time with my friends and family",
                "3": "Their partner often discourages me from spending time with my friends and family"
            }
        },
        {
            "index": 3,
            "question": "Does your friend’s  partner act jealously or obsessively over you?",
            "points": {
                "1": 0,
                "2": 5,
                "3": 10
            },
            "text": {
                "1": "My friend’s partner is never jealous or obsessive over me",
                "2": "My friend’s partner is sometimes jealous and/or obsessive over me",
                "3": "My friend’s partner is often jealous and/or obsessive over me"
            }
        },
        {
            "index": 4,
            "question": "Does your friend’s partner check your phone or social media to look at who you’ve been talking to?",
            "points": {
                "1": 0,
                "2": 5,
                "3": 10
            },
            "text": {
                "1": "My friend’s partner never checks my phone or social media",
                "2": "My friend’s partner sometimes checks my phone or social media",
                "3": "My friend’s partner often checks my phone or social media"
    
            }
        },
        {
            "index": 5,
            "question": "Does your friend’s experience mental health issues? e.g. depression, anxiety.",
            "points": {
                "1": 0.9,
                "2": 1,
                "3": 1.5
            },
            "text": {
                "1": "No, they do not experience any mental health issues",
                "2": "They occasionally experience mental health issues",
                "3": "Yes, they do experience mental health issues"
            }
        },
        {
            "index": 6,
            "question": "If you answered yes to question 5, has your friend’s partner ever threatened to commit suicide or blamed you for their mental health problems?",
            "points": {
                "1": 50,
                "2": 40,
                "3": 0
            },
            "text": {
                "1": "Yes, my friend’s partner often does this",
                "2": "My friend’s partner occasionally does this",
                "3": "No, my friend’s partner does not do this"
            }
        },
        {
            "index": 7,
            "question": "Has your friend recently been pregnant or given birth?",
            "points": {
                "1": 1,
                "2": 2,
                "maybe": null
            },
            "text": {
                "1": "No",
                "2": "Yes",
                "maybe": null
            }
        },
        {
            "index": 8,
            "question": "Does your friend regularly use drugs or alcohol? E.g. more than three standard twice a week.",
            "points": {
                "1": 0,
                "2": 5,
                "3": 10
            },
            "text": {
                "1": "Never",
                "2": "Sometimes",
                "3": "Yes"
            }
        },
        {
            "index": 9,
            "question": "Does your friend’s partner regularly use drugs or alcohol? e.g. more than three times a week",
            "points": {
                "1": 0,
                "2": 5,
                "3": 10
            },
            "text": {
                "1": "No, my friend’s partner does not do this",
                "2": "My friend’s partner sometimes does this",
                "3": "Yes, my friend’s partner often does this"
            }
        },
        {
            "index": 10,
            "question": "Does your friend’s partner break or throw objects when they are angry?",
            "points": {
                "1": 0,
                "2": 50,
                "3": 60
            },
            "text": {
                "1": "No, my friend’s partner does not do this",
                "2": "My friend’s partner sometimes does this",
                "3": "Yes, my friend’s partner often does this"
            }
        },
        {
            "index": 11,
            "question": "Has your friend’s partner ever threatened to physically harm you or someone close to you? (This may include pets)",
            "points": {
                "1": 0,
                "2": 50,
                "3": 60
            },
            "text": {
                "1": "No, my friend’s partner does not do this",
                "2": "My friend’s partner sometimes does this",
                "3": "Yes, my friend’s partner often does this"
            }
        },
        {
            "index": 12,
            "question": "Has your friend’s partner ever physically harmed you?",
            "points": {
                "1": 0,
                "2": 50,
                "3": 60
            },
            "text": {
                "1": "No, my friend’s partner does not do this",
                "2": "My friend’s partner sometimes does this",
                "3": "Yes, my friend’s partner often does this"
            }
        },
        {
            "index": 13,
            "question": "Does your friend experience mental health issues, such as depression or anxiety?",
            "points": {
                "1": 1,
                "2": 1.5,
                "3": 2
            },
            "text": {
                "1": "Never",
                "2": "Sometimes",
                "3": "Yes, I do"
            }
        },
        {
            "index": 14,
            "question": "Does your friend’s partner want to know where you are at all times?",
            "points": {
                "1": 0,
                "2": 5,
                "3": 10
            },
            "text": {
                "1": "No, my friend’s partner does not do this",
                "2": "My friend’s partner sometimes does this",
                "3": "Yes, my friend’s partner often does this"
            }
        },
        {
            "index": 15,
            "question": "Does your friend’s partner call/text you constantly, and get angry if you do not respond?",
            "points": {
                "1": 0,
                "2": 10,
                "3": 20
            },
            "text": {
                "1": "No, my friend’s partner does not do this",
                "2": "My friend’s partner sometimes does this",
                "3": "Yes, my friend’s partner often does this"
            }
        },
        {
            "index": 16,
            "question": "Has your friend’s partner ever pressured you to do something sexual that you did not want to do?",
            "points": {
                "1": 0,
                "2": 50,
                "3": 60
            },
            "text": {
                "1": "No, my friend’s partner does not do this",
                "2": "My friend’s partner sometimes does this",
                "3": "Yes, my friend’s partner often does this"
            }
        },
        {
            "index": 17,
            "question": "Has your friend’s partner been violent in situations that did not involve you? e.g. getting into physical fights with other people?",
            "points": {
                "1": 50,
                "2": 10,
                "3": 60
            },
            "text": {
                "1": "No, my friend’s partner never does this",
                "2": "My friend’s partner sometimes does this",
                "3": "Yes, my friend’s partner often does this"
            }
        }
    ],
}
