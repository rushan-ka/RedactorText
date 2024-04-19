// Импортирование необходимых зависимостей React и типов
import React, { useState, useEffect } from 'react';

export interface Param {
    name: string;
    value?: string;
}

interface Model {
    [key: string]: string | undefined;
}

interface ModelEditorProps {
    params: Param[];
}

// Компонент ModelEditor для редактирования и получения модели
export const ModelEditor: React.FC<ModelEditorProps> = (props) => {

    // Инициализация состояния модели
    const [model, setModel] = useState<Model>({});

    // Эффект для заполнения начальных значений модели
    useEffect(() => {
        const initialState: Model = {};
        props.params.forEach(param => {
            initialState[param.name] = param.value || '';
        });
        setModel(initialState);
    }, [props.params]);

    // Обработчик изменений в текстовых полях
    const handleInputChange = (name: string, value: string) => {
        setModel(prevModel => ({ ...prevModel, [name]: value }));
    };

    // Метод для получения полной структуры модели
    const getModel = () => {
        return model;
    };

    // Отображение текстовых полей для каждого параметра
    return (
        <div>
            {props.params.map((param) => (
                <div key={param.name}>
                    <label>{param.name}</label>
                    <input
                        type="text"
                        value={model[param.name] || ''}
                        onChange={(e) => handleInputChange(param.name, e.target.value)}
                    />
                </div>
            ))}
            <button onClick={() => console.log(getModel())}>Get Model</button>
        </div>
    );``
};

// Пример использования компонента ModelEditor
const App = () => {
    const params: Param[] = [
        { name: 'color', value: 'red' },
        { name: 'size', value: 'medium' },
        { name: 'nfqw', value: 'mediwqfqum' }

        // Добавление новых параметров не потребует изменений в компоненте
    ];

    return <ModelEditor params={params} />;
};

export default App;