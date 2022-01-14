import { FC, useState } from 'react';
import { Input, Select } from '../atoms';
import { Color, getColors } from '../services/colors';
import { Country, getCountries } from '../services/countries';

const AtomsPage: FC = () => {
  const [textValue, setTextValue] = useState('textValue')
  const [passwordValue, setPasswordValue] = useState('')
  const [numberValue, setNumberValue] = useState(0)

  const [countries] = useState<Country[]>([{ code: '', name: '' }, ...getCountries()])

  const [colors] = useState<Color[]>([{ id: '', label: '' }, ...getColors()])

  const [selectedCountryCode, setSelectedCountryCode] = useState<Country['code'] | undefined>('')
  const [selectColorId, setSelectColorId] = useState<Color['id'] | undefined>('')


  return (
      <>
        <div className="form-control">
          <label>Text</label>
          <Input
            type="text"
            value={textValue}
            onChange={(e) => setTextValue(e)} />
        </div>
        <div>
          <p>{textValue}</p>
        </div>

        <div className="form-control">
          <label>Text With Error</label>
          <Input
            status='error'
            placeholder='Text With Error'
          />
        </div>

        <div className="form-control">
          <label>Text With Warning</label>
          <Input
            status='warning'
            placeholder='Text With Warning'
          />
        </div>

        <div className="form-control">
          <label>Text With Success</label>
          <Input
            status='success'
            placeholder='Text With Success'
          />
        </div>

        <div className="form-control">
          <label>Password</label>
          <Input
            type="password"
            placeholder="Password"
            value={passwordValue}
            onChange={(e) => setPasswordValue(e)}
          />
        </div>

        <div className="form-control">
          <label>Number</label>
          <Input
            type="number"
            placeholder="Number"
            value={numberValue}
            min={0}
            max={100}
            step={1}
            onChange={(e) => setNumberValue(e || 0)}
          />
        </div>

        <div className="form-control">
          <label>Country</label>
          <Select
            options={countries}
            value={selectedCountryCode}
            propKey='code'
            propValue='code'
            propText='name'
            onChange={setSelectedCountryCode}
          />
        </div>

        <pre>{JSON.stringify(countries.find(c => c.code === selectedCountryCode) || {})}</pre>

        <div className="form-control">
          <label>Color</label>
          <Select
            options={colors}
            value={selectColorId}
            propKey='id'
            propValue='id'
            propText='label'
            onChange={setSelectColorId}
          />
        </div>

        <pre>{JSON.stringify(colors.find(c => c.id === selectColorId) || {})}</pre>
      </>
  );
}

export default AtomsPage;