import mongoose from 'mongoose';
import { PORT } from './constants';

import * as serverService from './services/server.service';

(async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://maruuuk:IzNntnxHLZ0kJ0nB@atlascluster.jfkytgk.mongodb.net/?retryWrites=true&w=majority'
        );
        serverService.server.listen(process.env.PORT || PORT, function () {
            console.log('Сервер ожидает подключения...');
        });
    } catch (error) {
        console.log(error);
    }
})();

process.on('SIGINT', async () => {
    await mongoose.disconnect();
    process.exit();
});
