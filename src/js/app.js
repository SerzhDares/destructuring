export default function specialAttacks(object) {
    const {special} = object;
    const attacks=[];
    special.forEach(item => {
        const {id, name, icon, description = 'Описание недоступно'} = item;
        attacks.push({id, name, icon, description});
    });
    return attacks;
}
