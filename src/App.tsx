import './App.css'
import { Root as RadioGroup } from '@radix-ui/react-radio-group'
import { styled } from './stitches.config'

import { Box, HorizontalBox } from './components/box'
import { Section } from './components/section'
import { Button, ButtonTypes } from './components/buttons'
import { Card, CardActionButton } from './components/card'
import { Title, Subtitle, Huge, GradientHeader, TitleTypes } from './components/titles'
import { List, ListItem } from './components/list'
import { Label, Input } from './components/label'
import { FormGroup } from './components/formGroup'
import { Checkbox, CheckboxGroup } from './components/checkbox'
import { StyledIndicator, StyledRadio } from './components/radioGroup'
import { Switch, SwitchThumb } from './components/switch'

function App() {
	return (
		<>
			<Section>
				<GradientHeader color='gradient'>Headers</GradientHeader>
				<Title text='# H1 Header' type={TitleTypes.H1} />
				<Title text='# H2 Header' type={TitleTypes.H2} />
				<Title text='# H3 Header' type={TitleTypes.H3} />
				<Title text='# H4 Header' type={TitleTypes.H4} />
			</Section>
			<Section>
				<GradientHeader color='gradient'>Buttons</GradientHeader>
				<Box>
					<Button text='Primary' type={ButtonTypes.primary} />
					<Button text='Secondary' type={ButtonTypes.secondary} />
					<Button text='Terciary' type={ButtonTypes.terciary} />
					<Button text='Special' type={ButtonTypes.special} />
				</Box>
			</Section>
			<Section>
				<GradientHeader color='gradient'>Cards</GradientHeader>
				<Card>
					<Title
						text='This is a card title, and it can get a bit long depending on the case'
						type={TitleTypes.H3}
						color='$gradient2' />
					<Subtitle>This is a subtitle and not supposed to get too lengthy, but who knows what people will do</Subtitle>
					<CardActionButton>
						<Button text='Click me my friend' type={ButtonTypes.primary} />
					</CardActionButton>
				</ Card>
			</Section>
			<Section>
				<GradientHeader color='gradient'>Forms</GradientHeader>
				<Card>
					<Title
						text='Form Example'
						type={TitleTypes.H3}
						color='$gradient2' />
					<Subtitle>Almost all of the elemets shown here are found at the radix-ui primitives library (label, checkbox, radio groups and switches)</Subtitle>
					<form>
						<HorizontalBox>
							<FormGroup>
								<Label htmlFor='name'>name</Label>
								<Input type="text" id="name" defaultValue="Filipe Morais" />
							</FormGroup>
							<FormGroup>
								<Label htmlFor='age'>age</Label>
								<Input type="number" id="age" defaultValue="30" />
							</FormGroup>
						</HorizontalBox>
						<Title text='Using what OS?' type={TitleTypes.H4} />
						<FormGroup type='checkbox'>
							<CheckboxGroup>
								<Checkbox />
								<Label>Some Linux Distro</Label>
							</CheckboxGroup>
							<CheckboxGroup>
								<Checkbox />
								<Label>Mac Os</Label>
							</CheckboxGroup>
							<CheckboxGroup>
								<Checkbox />
								<Label>Windows 🤔</Label>
							</CheckboxGroup>
						</FormGroup>
						<Title text='Which one do you prefer?' type={TitleTypes.H4} />
						<FormGroup>
							<RadioGroup>
								<CheckboxGroup>
									<StyledRadio value='coffee' id='radio1'>
										<StyledIndicator />
									</StyledRadio>
									<Label htmlFor='radio1'>Coffee</Label>
								</CheckboxGroup>
								<CheckboxGroup>
									<StyledRadio value='tea' id='radio2'>
										<StyledIndicator />
									</StyledRadio>
									<Label htmlFor='radio2'>Tea</Label>
								</CheckboxGroup>
								<CheckboxGroup>
									<StyledRadio value='other' id='radio3'>
										<StyledIndicator />
									</StyledRadio>
									<Label htmlFor='radio3'>Some other fancy drink</Label>
								</CheckboxGroup>
							</RadioGroup>
						</FormGroup>
						<Title text='Want to receive our awesome updates?' type={TitleTypes.H4} />
						<FormGroup>
							<CheckboxGroup>
								<Label htmlFor='s1'>So, let's go?</Label>
								<Switch id='s1'>
									<SwitchThumb />
								</Switch>
							</CheckboxGroup>
						</FormGroup>

						<CardActionButton>
							<Button text='Submit' type={ButtonTypes.primary} />
							<Button text='Reset' type={ButtonTypes.secondary} />
						</CardActionButton>
					</form>
				</ Card>
			</Section>
			<Section css={{ backgroundColor: '$blue', padding: '$3' }}>
				<Huge color='$white'>Frontend apresenta:<br /><GradientHeader>Mandarim</GradientHeader>, nosso <strike>Design System</strike></Huge>
				<Subtitle css={{ color: '$white', fontWeight: '800', fontSize: '$5' }}>E então, começamos</Subtitle>
			</Section>
			<Section css={{ backgroundColor: '$white', padding: '$3' }}>
				<GradientHeader color='gradient'>Tech stack</GradientHeader>
				<Subtitle css={{ color: '$black', fontWeight: '800', fontSize: '$5' }}>O que escolhemos?</Subtitle>
				<List>
					<ListItem>vite (Frontend tooling)</ListItem>
					<ListItem>react-ts</ListItem>
					<ListItem>radix-ui</ListItem>
					<ListItem>stitches (css-in-js)</ListItem>
				</List>
			</Section>
		</>
	)
}

export default App
