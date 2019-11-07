import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Mail from '../../lib/Mail';

class CancellationMail {
    get key() {
        return 'CancellationMail';
    }

    async handle({ data }) {
        console.log('Ca fila executou');
        const { appointment } = data;
        const obj = {
            to: `${appointment.provider.name} <${appointment.provider.email}>`,
            subject: 'agendamento cancelado',
            text: 'voce tem um novo cancelamento',
            template: 'cancellation',
            context: {
                provider: appointment.provider.name,
                user: appointment.user.name,
                date: format(
                    parseISO(appointment.date),
                    "'dia' dd 'de' MMM, 'às' H:mm'h'",
                    { locale: pt }
                ),
            },
        };
        await Mail.sendMail(obj);

        return 'CancellationMail';
    }
}

export default new CancellationMail();
