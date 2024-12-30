import { createAvatar } from '@dicebear/core';
import { miniavs } from '@dicebear/collection';

interface AvatarProps {
    gender: string;
    created: string;
    size: number;
}

enum Body {tShirt = 'tShirt', golf = 'golf'}
enum Eyes {normal = 'normal', confident = 'confident', happy = 'happy'}
enum Hair {balndess = 'balndess', slaughter = 'slaughter', ponyTail = 'ponyTail', long = 'long', curly = 'curly',
        stylish = 'stylish', elvis = 'elvis', classic02 = 'classic02', classic01 = 'classic01'}
enum Mustache {pencilThinBeard ='pencilThinBeard', pencilThin='pencilThin', horshoe ='horshoe', freddy='freddy'}

export const CreateAvatar = ({gender, created, size} : AvatarProps) => {
    const bgColors = ["b6e3f4", "c0aede", "d1d4f9", "ffd5dc", "ffdfbf", "c1f9d6", "b4f0e8"]
    const bodyVariants  = [Body.golf, Body.tShirt]
    const bodyColors= ["3633e0","e05a33","ff4dd8", "3365e0", "e0335a", "4dff88", "ffcc33", "8c4dff"]
    const eyesVariants = [Eyes.normal, Eyes.confident, Eyes.happy]
    const manHairs = [Hair.balndess, Hair.classic01, Hair.classic02, Hair.curly, Hair.elvis, Hair.stylish, Hair.slaughter]
    const womanHairs = [Hair.ponyTail, Hair.long]
    const hairColors = ["241c11", "4f1a00", "9a3300"]
    const mustacheVariants = [Mustache.horshoe, Mustache.freddy, Mustache.pencilThin, Mustache.pencilThinBeard]

    const hash = created.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);

    const avatar = createAvatar(miniavs, {
        flip: false,
        backgroundColor: [bgColors[hash % bgColors.length]],
        size: size,
        body: [bodyVariants[hash % bodyVariants.length]],
        bodyColor: [bodyColors[hash % bodyColors.length]],
        mustacheProbability: gender === 'Male' ? hash % 10 > 5 ? 100 : 0 : 0,
        glassesProbability: hash % 10 > 6 ? 100 : 0,
        blushesProbability: 0,
        eyes: [eyesVariants[hash % eyesVariants.length]],
        hair: gender === 'Male' ? [manHairs[hash % manHairs.length]] : [womanHairs[hash % womanHairs.length]],
        hairColor: [hairColors[hash % hairColors.length]],
        mustache: gender === 'Male' ? [mustacheVariants[hash % mustacheVariants.length]] : undefined
    });

    return avatar.toString();
}