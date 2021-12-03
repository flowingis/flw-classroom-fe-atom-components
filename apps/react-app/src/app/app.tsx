import { FC, useState } from 'react';
import styles from './app.module.scss';
import { Input } from './components/atoms/Input';
import { Color, getColors } from './services/colors';
import { Country, getCountries } from './services/countries';

const App: FC = () => {
  const [textValue, setTextValue] = useState('textValue');
  const [passwordValue, setPasswordValue] = useState('');
  const [numberValue, setNumberValue] = useState(0);

  const [countries] = useState<Country[]>([
    { code: '', name: '' },
    ...getCountries(),
  ]);

  const [colors] = useState<Color[]>([{ id: '', label: '' }, ...getColors()]);

  const [selectedCountryCode, setSelectedCountryCode] = useState<
    Country['code'] | undefined
  >('');
  const [selectColorId, setSelectColorId] = useState<Color['id'] | undefined>(
    ''
  );

  return (
    <div className={styles.app}>
      <header>
        <h1>Welcome to Flowing Classroom!</h1>
      </header>
      <main>
        <div className="form-control">
          <label>Text</label>
          <Input value={textValue} onChange={setTextValue} />
        </div>
        <div>
          <p>{textValue}</p>
        </div>

        <div className="form-control">
          <label>Text With Error</label>
          <input
            className="input_type1 input_type1--error"
            type="text"
            placeholder="Text With Error"
          />
        </div>

        <div className="form-control">
          <label>Text With Warning</label>
          <input
            className="input_type1 input_type1--warning"
            type="text"
            placeholder="Text With Warning"
          />
        </div>

        <div className="form-control">
          <label>Text With Success</label>
          <input
            className="input_type1 input_type1--success"
            type="text"
            placeholder="Text With Success"
          />
        </div>

        <div className="form-control">
          <label>Password</label>
          <input
            className="input_type1"
            type="password"
            placeholder="Password"
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label>Number</label>
          <input
            className="input_type1"
            type="number"
            placeholder="Number"
            value={numberValue}
            min={0}
            max={100}
            step={1}
            onChange={(e) => setNumberValue(e.target.valueAsNumber)}
          />
        </div>

        <div className="form-control">
          <label>Country</label>
          <select
            className="select_style1"
            value={selectedCountryCode}
            onChange={(e) => {
              setSelectedCountryCode(e.target.value);
            }}
          >
            {countries.map(({ code, name }) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <pre>
          {JSON.stringify(
            countries.find((c) => c.code === selectedCountryCode) || {}
          )}
        </pre>

        <div className="form-control">
          <label>Color</label>
          <select
            className="select_style1"
            value={selectColorId}
            onChange={(e) => {
              setSelectColorId(e.target.value);
            }}
          >
            {colors.map(({ id, label }) => (
              <option key={id} value={id}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <pre>
          {JSON.stringify(colors.find((c) => c.id === selectColorId) || {})}
        </pre>
      </main>
    </div>
  );
};

export default App;
