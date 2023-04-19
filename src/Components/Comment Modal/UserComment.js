import React from 'react'
import styled from "styled-components";
import { CircleProfileSmall } from '../../Styled Components/CircleProfileImg'
import ProfilePic from '../../images/profile.jpg'

const UserCommentDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    .user-comment-name {
        font-weight: bold;
        font-size: 14px;
    }
    .user-comment-date {
        color: grey;
        font-size: 12px;
        margin-left: 5px;
    }
    .user-comment-description {
        margin-right: 1rem;
    }
`
const UserCommentPost = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-bottom: 10px;
    padding-bottom: 16px;
    border-bottom: none;
`
function UserComment() {
  return (
    <UserCommentPost>
        <CircleProfileSmall src={ProfilePic} alt='Profile picture' />

        <UserCommentDescription>
            <p className='user-comment-name'>
                User Name
                <span className='user-comment-date'> 12/1/1990
                </span>
            </p>

            <p className='user-comment-description'>
            It was that terrifying feeling you have as you tightly hold the covers over you with the knowledge that there is something hiding under your bed. You want to look, but you don't at the same time. You're frozen with fear and unable to act. That's where she found herself and she didn't know what to do next
To the two friends, the treehouse was much more than a treehouse. It was a sanctuary away from the other kids where they could be themselves without being teased or bullied. It was their secret fortress hidden high in the branches of a huge oak that only they knew existed. At least that is what they thought. They were more than a little annoyed when their two younger sisters decided to turn the treehouse into a princess castle by painting the inside pink and putting glitter everywhere.
She had come to the conclusion that you could tell a lot about a person by their ears. The way they stuck out and the size of the earlobes could give you wonderful insights into the person. Of course, she couldn't scientifically prove any of this, but that didn't matter to her. Before anything else, she would size up the ears of the person she was talking to.
It was hidden under the log beside the stream. It had been there for as long as Jerry had been alive. He wasn't sure if anyone besides him and his friends knew of its existence. He knew that anyone could potentially find it, but it was well enough hidden that it seemed unlikely to happen. The fact that it had been there for more than 30 years attested to this. So it was quite a surprise when he found the item was missing.
The drug seekers would come into the emergency room and scream about how much pain they were in. When you told them that you would start elevating their pain with Tylenol or Advil instead of a narcotic they became nasty and combative. They would start telling you what drug and dose they had to have to make their pain tolerable. After dealing with the same drug seekers several times a month it gets old. Some of the doctors would give in and give them a dose of morphine and send them away. Sure that was faster, but ethically she still couldn’t do it. Perhaps that’s why she had longer care times than the other doctors.
There were little things that she simply could not stand. The sound of someone tapping their nails on the table. A person chewing with their mouth open. Another human imposing themselves into her space. She couldn't stand any of these things, but none of them compared to the number one thing she couldn't stand which topped all of them combined.
As she sat watching the world go by, something caught her eye. It wasn't so much its color or shape, but the way it was moving. She squinted to see if she could better understand what it was and where it was going, but it didn't help. As she continued to stare into the distance, she didn't understand why this uneasiness was building inside her body. She felt like she should get up and run. If only she could make out what it was. At that moment, she comprehended what it was and where it was heading, and she knew her life would never be the same.
The bush began to shake. Brad couldn't see what was causing it to shake, but he didn't care. he had a pretty good idea about what was going on and what was happening. He was so confident that he approached the bush carefree and with a smile on his face. That all changed the instant he realized what was actually behind the bush.
With six children in tow, Catherine raced to the airport departing gate. This wasn't an easy task as the children had other priorities than to get to the gate. She knew that she was tight on time and the frustration came out as she yelled at the kids to keep up. They continued to test her, pretending not to listen and to move in directions that only slowed them down. They had no idea the wrath they were about to receive when Catherine made it to the gate only to be informed that they had all missed the plane.
She looked at her student wondering if she could ever get through. "You need to learn to think for yourself," she wanted to tell him. "Your friends are holding you back and bringing you down." But she didn't because she knew his friends were all that he had and even if that meant a life of misery, he would never give them up.
            </p>
        </UserCommentDescription>

    </UserCommentPost>
  )
}

export default UserComment